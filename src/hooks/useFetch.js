
//create a custom use effect hook
//adding error
//abort controller for fetch
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController(); // Create an AbortController instance
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error before fetching
            try {
                const response = await fetch(url, { signal: controller.signal }); // Pass the abort signal

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to abort fetch request if the component unmounts
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, loading, error };
};

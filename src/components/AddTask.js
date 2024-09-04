
import { useState } from "react";
import "../assets/css/AddTask.css";

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }

        setTasks([...tasks, task])
        // before reset add data to tasks list
        handleReset();
        console.log(task); // You might want to do something with the task here
    }

    const handleProgressChange = (event) => {
        setProgress(event.target.value === "true");
    }

    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue} />
                <select onChange={handleProgressChange} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit" className="trigger">Add Task</button>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}




/* 
import React, { useState } from "react";
import "../assets/css/AddTask.css";

export const AddTask: React.FC = () => {
    // Define state with appropriate types
    const [taskValue, setTaskValue] = useState<string>("");
    const [progress, setProgress] = useState<boolean>(false);

    // Handle change event for the input field
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    // Reset form fields
    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: progress
        };
        handleReset();
        console.log(task); // Handle the task data as needed
    };

    // Handle change event for the select dropdown
    const handleProgressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProgress(event.target.value === "true");
    };





*/
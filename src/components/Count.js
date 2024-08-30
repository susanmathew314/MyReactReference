import { useState } from 'react';


export const Count = () => {
    const [count, setCount] = useState(0);

    function handleAdd(){
      setCount(count + 1);
    }
  
    function handleSub(){
      setCount(count - 1);
    }
  
    function handleReset(){
      setCount(0);
    }
  
    return (
      <div className="App">
        <div className="box">
            <h4>Counter</h4>
          <p>{count}</p>
          <button onClick={handleAdd} className='add'>ADD</button>
          <button onClick={handleSub} className='sub'>SUB</button>
          <button onClick={handleReset} className='reset'>RESET</button>
        </div>
      </div>
    );
}

export default Count

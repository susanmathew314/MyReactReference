
import "./App.css";


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Banner from './assets/banner-1.jpeg';
import {Count} from "./components/Count";
import {TaskwithProps} from "./components/TaskwithProps";
import {MyTask} from "./components/MyTask";
import {SimilarType} from './components/SimilarType';

import  { AddTask } from './components/AddTask';
import { useState, useEffect } from 'react';
import { useFetch } from "./hooks/useFetch";



const App = () => {
  const userName="Susan";
  const footerInfo ="Random message for propdrilling";
  const [url, setUrl] = useState("http://localhost:8000/tasks");
  const { data:tasks, loading, error } = useFetch(url); //destructure





 /*  const taskList=[
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ] */
 




  // Step 2: Remove the constant taskList and use an empty array

  //const [tasks, setTasks] = useState(taskList);
  const [localtasks, setTasks] = useState([]);

  // Step 3: Fetch the task list from db.json using useEffect
 useEffect(() => {
  if(tasks){
    setTasks(tasks)
  }
},[tasks]);






  return (
<>
<Header  user={userName}  />
      <h1>Hello {userName}</h1>



      <img src={Banner} alt="banner" />


    <h1>Calculate counter</h1>
      <Count />

<h1>Add Task</h1>
<h2>Inorder to add a task to existing tasklist first move all your task list and task state to parent component. 
  then pass it as a props to the each task </h2>



      <h1>How to display array of objects here it is some tasks </h1>
      <MyTask />

      Add a task to existing one
    
      <AddTask   tasks={localtasks} setTasks={setTasks} loading={loading} />
      <h1>How to use Props from parent to child</h1>
  
      {loading && <p>Loader</p>}
  {error && <p>Failed to fetch</p>}
      <TaskwithProps  tasks={localtasks} setTasks={setTasks} />

      <h1>Create reusable similar type components with different data and classes. example, succes, warning and alert box</h1>
      <SimilarType />







      <h1>Prop Drilling</h1>
      Passing data from parent to child via props only from one component to another.
          
      <Footer  footerInfo={footerInfo} />




      </>
  );
}

export default App;



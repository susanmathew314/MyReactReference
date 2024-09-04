
import "./App.css";


import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import Banner from './assets/banner-1.jpeg';
import {Count} from "./components/Count";
import {TaskwithProps} from "./components/TaskwithProps";
import {MyTask} from "./components/MyTask";
import {SimilarType} from './components/SimilarType';

import  { AddTask } from './components/AddTask';
import { useState } from 'react';

const App = () => {
  const userName="Susan";
  const footerInfo ="Random message for propdrilling";


  const taskList=[
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ]
  const [tasks, setTasks] = useState(taskList);


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
      <AddTask   tasks={tasks} setTasks={setTasks} />
      <h1>How to use Props from parent to child</h1>
  
      <TaskwithProps  tasks={tasks} setTasks={setTasks} />

      <h1>Create reusable similar type components with different data and classes. example, succes, warning and alert box</h1>
      <SimilarType />







      <h1>Prop Drilling</h1>
      Passing data from parent to child via props only from one component to another.
          
      <Footer  footerInfo={footerInfo} />




      </>
  );
}

export default App;



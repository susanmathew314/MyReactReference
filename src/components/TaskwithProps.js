import { useState } from 'react';
import { Card } from './Card';
import { NewCard } from './NewCard';
export const TaskwithProps = () => {
const taskList=[
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ]


  const [tasks, setTasks] = useState(taskList); 


  //checking for true or false to show and hide elements setting state
  const [show, setShow] = useState(true);



  function handleDelete(id){
    console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
  }


  return (
<div>
<h1>Task with props-using task card for list</h1>
<h2>Here we are using props as parameter means passing tasks as parameter to child and getting it as props</h2>
<button className="trigger" onClick={()=>setShow(!show)}>Toggle List</button>
<ul>
{show && tasks.map((task)=>(
    <Card task={task} handleDelete={handleDelete} />
))}

</ul>



<h1>Task with props as seperate values in child component. this is the proper way of using child component. Pass the one task and the function as attributes in the child component directive</h1>
Also pass the key also to the child directive to fix the error with key. 

<ul>
{show && tasks.map((task)=>(
    <NewCard  key={task.id} task={task} handleDelete={handleDelete} />
))}
</ul>


    </div>
  )
}









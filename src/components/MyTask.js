
import { useState } from 'react';

export const MyTask = () => {
  
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
        <h1>Task List- Displaying array of objects instead of index use task.id -using map to list all</h1>

<ul>
{tasks.map((task, index)=>(
     <li key={index}>
    {task.id} - {task.name}
   
    </li>
))}

</ul>






<h2> tasklist destructuring- using map to list all</h2>
<ul>

{tasks.map(({id, name, completed},index)=>(
     <li key={index}>
    {id} - {name}

    </li>
))}

</ul>







 <h3>Use taskid instead of index for deleting and all its better to use any unique id</h3>   
 <h2> tasklist destructuring, using map to list all</h2>
<ul>

{tasks.map(({id, name, completed})=>(
     <li key={id}>
    {id} - {name}

    </li>
))}

</ul>







<h1>Delete button Implementation</h1>

<h2>When you pass a parameter make sure to use anonymous function in template instead of calling function with parameters otherwise it will execute the code while rendering
see the code below to implement delete by passing id to  handle delete function. Using  map, filter functions here. 
</h2>
<ul>
{tasks.map(({id, name, completed})=>(
     <li key={id}>
    {id} - {name}
    <button  className="delete"  onClick={() => handleDelete(id)} >Delete</button>
    </li>
))}

</ul>







<h1> Conditional Templates - show based on conditions</h1>
<h2>Some conditions is true then show all list show state is true show all list.
if the state of show is false it wont show the list.


</h2>
<ul>
{show && tasks.map(({id, name, completed})=>(
     <li key={id}>
    {id} - {name}
    <button  className="delete"  onClick={() => handleDelete(id)} >Delete</button>
    </li>
))}
</ul>








<h1>Adding a button also to toggle the data to hide and show</h1>
<button className="trigger" onClick={()=>setShow(!show)}>Toggle List</button>
<ul>
{show && tasks.map(({id, name, completed})=>(
     <li key={id}>
    {id} - {name}
    <button  className="delete"  onClick={() => handleDelete(id)} >Delete</button>
    </li>
 
))}

</ul>


<h1>changing styles based on class completed or not</h1>
<button className="trigger" onClick={()=>setShow(!show)}>Toggle List</button>
<ul>
{show && tasks.map(({id, name, completed})=>(
     <li key={id}  className={completed ? "completed" : "incomplete"}>
    {id} - {name}
    <button  className="delete"  onClick={() => handleDelete(id)} >Delete</button>
    </li>
 
))}

</ul>







    </div>
  )
}









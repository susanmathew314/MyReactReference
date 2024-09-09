import { useState } from 'react';
import { Card } from './Card';
import { NewCard } from './NewCard';
export const TaskwithProps = ({tasks, setTasks, loading}) => {


  /* moving task list to parent componet for passing data to adjustant components

/* const taskList=[
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ]


  const [tasks, setTasks] = useState(taskList);  */


  //checking for true or false to show and hide elements setting state
  const [show, setShow] = useState(true);



/*   function handleDelete(id){
    console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
  } */



      // Function to delete task from server and update state
  const handleDelete = async (id) => {
    console.log("Attempting to delete task with ID:", id); // Check ID
    try {
      // Delete the task from the server
      const response = await fetch(`http://localhost:8000/tasks/${id}`, {
        method: 'DELETE',
    });

       // If the delete request was successful, update the local state
       if (response.ok) {
        setTasks(tasks.filter(task => task.id !== id));
    } else {
        console.error('Failed to delete the task on the server');
    }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
  };


  return (


<div>


{/* <h1>Task with props-using task card for list</h1>
<h2>Here we are using props as parameter means passing tasks as parameter to child and getting it as props</h2> */}
{/* <button className="trigger" onClick={()=>setShow(!show)}>Toggle List</button> */}
<button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>



{/* <ul>
{show && tasks.map((task)=>(
    <Card task={task} key={task.id} handleDelete={handleDelete} />
))}

</ul> */}



<h1>Task with props as seperate values in child component. this is the proper way of using child component. Pass the one task and the function as attributes in the child component directive</h1>
Also pass the key also to the child directive to fix the error with key. 
{loading &<p>Loading Products</p>}
<ul>
{show && tasks.map((task)=>(
    <NewCard  key={task.id} task={task} handleDelete={handleDelete} />
))}
</ul>


    </div>
  )
}









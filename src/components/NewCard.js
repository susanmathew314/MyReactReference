export const NewCard = ({task, handleDelete}) => {
  return (
/* removed key from here and moved to the NewCard directive in parent component */
<li   className={task.completed ? "completed" : "incomplete"}>
{task.id} - {task.name}
<button  className="delete"  onClick={()=>handleDelete(task.id)} >Delete</button>
</li>
  )
}

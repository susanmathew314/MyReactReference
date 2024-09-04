export const Card = (props) => {
  return (
/* Below key shold be moved to parent Card component to fix console error related to keys 
<li key={props.task.id}  className={props.task.completed ? "completed" : "incomplete"}>*/
<li  className={props.task.completed ? "completed" : "incomplete"}>
{props.task.id} - {props.task.name}
<button  className="delete"  onClick={()=>props.handleDelete(props.task.id)} >Delete</button>
</li>
  )
}

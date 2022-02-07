import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  //set state and a changeState function
  return(
    <>
      {tasks.map((task) => (
        <Task key = {task.id} task = {task} onDelete={onDelete}/> 
        ))}
    </>
  );
};

export default Tasks;

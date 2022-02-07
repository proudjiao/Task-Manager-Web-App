import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react";
//import hook use State from react allows you to store state in functions just like in React classes!


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "2/3/2022",
    },
    {
      id: 2,
      text: "Study",
      day: "2/21/2022"
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id ))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask}/> : 
        'No Tasks To Show'} 
    </div>
  );
}



export default App;

import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasksArrHereIsAlsoState, setTask ] = useState([
    {
        id: 1,
        chore: 'Doors Appointment Date',
        date: '28 Feb 2020',
        status: 'Done'
    },
    {
        id: 2,
        chore: 'Second Appointment Up',
        date: '28 Feb 2020'
    }, 
    {
        id: 3,
        chore: 'Third Appointment',
        date: '28 Feb 2020'
    },   
    {
        id: 4,
        chore: 'Fourth Appointment',
        date: '28 Feb 2020'
    }     
])
  
  return (
    <div className="App">
      <Header title='Task Tracker'/>
      <Tasks tasksListedProp={tasksArrHereIsAlsoState}/>
    </div>
  );
}

export default App;

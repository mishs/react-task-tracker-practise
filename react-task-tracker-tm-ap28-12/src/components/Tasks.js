import { useState } from 'react'
 
const Tasks = () => {
    const [tasksListed, setTask ] = useState([
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
    // NOTE-
    // setTask is when you want to change or update state;
    // but state is immutable, so you can't/shouldn't do tasks.push
    // state is not some thing you can directly change. (cause issues). Rather you Recreate it and send it down- 
    // in our case using this setTask. 
    // Reminder,  ...prevTask, {updates state in here}
    //   ?as in counter: counter + 1?

    return (
        // ALWAYS REMEMBER, HERE RETURNS OBJECT, SO CURLY BRACKETS INSIDE
        <div>
            {tasksListed.map(task => (
                // IN THIS CASE, NO NEED TO PASS ACTUAL VALUE WHERE TASK IS CALLED SINCE VALUE IS BEING RETRIEVED FROM THE ARRAY'S OBJECTS
                <h1 key={task.id}>{task.chore}</h1>
            ))}
        </div>
    )
}

export default Tasks

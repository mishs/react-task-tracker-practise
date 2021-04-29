import Task from "./Task"

const Tasks = ({ tasksListedProp }) => {
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
            {tasksListedProp.map(task => (
                // IN THIS CASE, NO NEED TO PASS ACTUAL VALUE WHERE TASK IS CALLED SINCE VALUE IS BEING RETRIEVED FROM THE ARRAY'S OBJECTS
                <Task key={task.id} taskProp={task}/>
            ))}
        </div>
    )
}

export default Tasks

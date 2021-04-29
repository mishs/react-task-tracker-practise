const Task = ({ taskProp }) => {
    return (
        <div className='task'>
        <h3>{taskProp.chore}</h3>
        <p>{taskProp.date}</p>
        </div>
    )
}

export default Task

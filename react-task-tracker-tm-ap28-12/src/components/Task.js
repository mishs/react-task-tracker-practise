import { FaTimes } from 'react-icons/fa'
const Task = ({ taskProp }) => {
    return (
        <div className='task'>
        <h3>{taskProp.chore} <FaTimes style={{ color: 'red', cursor: 'pointer'}} /></h3>
        <p>{taskProp.date}</p>
        </div>
    )
}

export default Task

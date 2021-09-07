import Task from './Task';
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={tasks.id} task={task} />
            ))}
            
        </>
    )
}

export default Tasks

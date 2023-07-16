import React from 'react'

const TasksManger = ({ tasks, handleCompletion }) => {
    return (
        <div className='taskManager'>
            <p>Total Tasks : {tasks.length}</p>
            <div>
                <p>Completed :  {handleCompletion.length}</p>
                <p>Remaining : {tasks.length - handleCompletion.length}</p>
            </div>
        </div>
    )
}

export default TasksManger
import React from 'react'

import { FaTrash } from "react-icons/fa";

const Content = ({ tasks, handleChange, handleDelete}) => {
  
  return (

    <main>

      {(tasks.length) ? (
        <ul>
          {tasks.map((task) => (
            <li className="task" key={task.id}
            >
              <input
                type="checkbox"
                onChange={() => handleChange(task.id)}
                checked={task.checked} className='checkbox' />

              <label className='label' onClick={() => handleChange(task.id)}
                style={(task.checked) ? ({ textDecoration: "line-through", textDecorationColor: "rgb(121, 101, 231)" }) : null}>
                {task.task}
              </label>

              <FaTrash className='trashCan' role='button'
                onClick={() => handleDelete(task.id)}
              // aria-label={"delete" + `${task.task}`}

              />

            </li>
          ))}
        </ul>
      ) : (<p style={{ fontSize: "30px", color: "white",margin:"auto 0px" }}>Your List is Empty !</p>)}
    
    </main>
  )
}

export default Content
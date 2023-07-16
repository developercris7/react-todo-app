import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'


const AddItems = ({ newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()
    return (

        <form className='addItem' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>

            <input
                autoFocus
                ref={inputRef}
                type="text"
                id="addItem"
                placeholder='Add Task'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button type='submit' onClick={()=> inputRef.current.focus()}>
                ADD
            </button>
        </form>



    )
}

export default AddItems
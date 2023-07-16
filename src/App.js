import React, { useEffect } from 'react'
import Header from './Header'
import './index.css'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'
import AddItems from './AddItems'
import TasksManger from './TasksManger'



const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todo-list")) || [] )

  const [fetchError, setFetchError] = useState(null)


  const addItems = (item) => {

    const ids = (tasks.length) ? tasks[tasks.length - 1].id + 1 : 1;

    const addNewItem = { id: ids, checked: false, task: item };

    const listItems = [...tasks, addNewItem]
    setTasks(listItems);

      localStorage.setItem('todo-list',JSON.stringify(listItems))
  }

  const handleChange = (id) => {

    const listsItems = tasks.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)

    setTasks(listsItems)

    localStorage.setItem('todo-list',JSON.stringify(listsItems))
    

  }


  const handleDelete =  (id) => {

    const listItems = tasks.filter((item) => item.id !== id)

    setTasks(listItems)
    
    localStorage.setItem('todo-list',JSON.stringify(listItems))
   
  }

  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();
    if (newItem === '') return;
    addItems(newItem)
    setNewItem('');

  }

  const handleCompletion = tasks.filter((task) => (task.checked));


  return (
    <div className='App'>
      <Header title="To-Do App" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <TasksManger
        tasks={tasks}
        handleCompletion={handleCompletion}
      />
     
  
        
          <Content
            tasks={tasks}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleCompletion={handleCompletion}
          />
        


      <Footer />

    </div>
  )
}

export default App
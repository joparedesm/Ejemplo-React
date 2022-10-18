import React, {useState, useEffect} from 'react'
import TaskList from './TaskList.jsx'
import TaskForm from './TaskForm.jsx'
import {tasks as data} from './task.js'

function App() {

  const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(taskTitle){
      setTasks([...tasks, {
        title: taskTitle,
        id: tasks.length,
        description: "otra tarea"
      }])
    }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks = {tasks}/>
    </>
  )
}

export default App
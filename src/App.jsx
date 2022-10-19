import React, {useState, useEffect} from 'react'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import {tasks as data} from './data/task.js'

function App() {

  const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task){
      setTasks([...tasks, {
        title: task.title, 
        id: tasks.length,
        description: task.description
      }])
    }

    function deleteTask(taskId){
      setTasks(tasks.filter(task => task.id !== taskId))
    }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks = {tasks} 
      deleteTask={deleteTask}/>
    </>
  )
}

export default App
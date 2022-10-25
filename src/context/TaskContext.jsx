import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/task.js'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title, 
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId){
    setTasks(tasks
      .filter(task => task.id !== taskId)
      .map(task => {
        if (task.id > taskId) {
          task.id = task.id - 1
        }
        return task
      })
      )
  }

  useEffect(() => {
    setTasks(data)
}, [])


  return (
   <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
   }}>{props.children}
   </TaskContext.Provider>
  )
}
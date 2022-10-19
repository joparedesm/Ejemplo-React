import { useState } from 'react'

function TaskForm({createTask}) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
          title, 
          description
        })
        setTitle('')
        setDescription('')
    }

  return (
    <form onSubmit = { handleSubmit }>
      <input 
      placeholder = "Tarea por ingresar" 
      onChange = {(e) => setTitle(e.target.value)}
      value = {title}
      autoFocus
      />
      <br/>
      <textarea 
      placeholder = 'Descripcion' 
      onChange = {(e) => setDescription(e.target.value)}
      value = {description}
      ></textarea>
      <br/>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;

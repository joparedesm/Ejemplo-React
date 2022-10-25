import TaskContext from "../context/TaskContext";

function TaskCard({task, deleteTask}) {

  return (
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick = { () => deleteTask(task.id) }>
          Eliminar
        </button>
      </div>
    </TaskContext>
  );
}

export default TaskCard;

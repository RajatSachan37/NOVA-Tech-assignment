import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([...tasks, { id: Date.now(), title: task, completed: false }]);
    setTask("");
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className='container'>
      <h2>Task Tracker</h2>

      <div className='input-box'>
        <input
          type='text'
          placeholder='Enter a task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* <ul className='task-list'>
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            <span>{t.title}</span>
            <button onClick={() => toggleStatus(t.id)}>
              {t.completed ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul> */}

      <ul className='task-list'>
        {tasks.map((t, index) => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            <span>
              <strong>{index + 1}.</strong> {t.title}
            </span>
            <button onClick={() => toggleStatus(t.id)}>
              {t.completed ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

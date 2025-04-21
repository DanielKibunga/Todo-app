import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, done: false }]);
    setTask('');
  };

  const toggleDone = (index) => {
    const copy = [...todos];
    copy[index].done = !copy[index].done;
    setTodos(copy);
  };

  return (
    <div className="app">
       <h2>My To-Do list</h2>
      <div className="input-row">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Type a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr key={i} onClick={() => toggleDone(i)}>
              <td>{i + 1}</td>
              <td style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </td>
              <td>{todo.done ? 'Done' : 'Not done'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

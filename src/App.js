import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch todos when the component loads
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
      setLoading(false);  // Set loading to false after data is fetched
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> - {todo.completed ? 'Completed' : 'Not Completed'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

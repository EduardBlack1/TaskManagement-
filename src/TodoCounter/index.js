import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  const progress = (completedTodos / totalTodos) * 100;

  return (
    /*
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
    */

    <div className="TodoCounter">
      <h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tareas
      </h1>
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
    </div>

  );
}

export { TodoCounter };

import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    
    totalTodos == completedTodos ? 
      <h2 className='TodoCounter'>Felicidades, has completado todas las tareas ✔</h2>
      :

      <h1 className='TodoCounter'>
         Has completado <span>{completedTodos}</span> de <span>{totalTodos} </span>Tareas
      </h1>
  );
}

export { TodoCounter };
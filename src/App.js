import React from 'react';
import './App.css';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Iniciar Curso ReactJS', completed: true },
  { text: 'Iniciar Curso Manipulación del DOM', completed: false },
  { text: 'Practicar lo aprendido', completed: false },
  { text: 'Finalizar Curso ReactJS', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter  completed={16} total={20}/>
      <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
          ))}

        </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Iniciar Curso ReactJS', completed: true },
  { text: 'Iniciar Curso Manipulación del DOM', completed: false },
  { text: 'Practicar lo aprendido', completed: false },
  { text: 'Finalizar Curso ReactJS', completed: false },
];

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

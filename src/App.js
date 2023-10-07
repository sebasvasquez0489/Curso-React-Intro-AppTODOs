import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: 'Iniciar Curso ReactJS', completed: true },
  { text: 'Iniciar Curso Manipulación del DOM', completed: false },
  { text: 'Continuar curso ReactJS', completed: true },
  { text: 'Practicar lo aprendido', completed: false },
  { text: 'Finalizar Curso ReactJS', completed: false },
];

function App() {
  //AGREGANDO ESTADOS
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('los usuarios buscan' + searchValue);
  return (
    <>
      <TodoCounter  
        completed={completedTodos} 
        total={totalTodos}
        />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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

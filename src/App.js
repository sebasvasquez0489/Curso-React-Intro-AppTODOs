import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Iniciar Curso ReactJS', completed: true },
//   { text: 'Iniciar Curso Manipulación del DOM', completed: false },
//   { text: 'Continuar curso ReactJS', completed: true },
//   { text: 'Practicar lo aprendido', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.
// stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  //AGREGANDO ESTADOS
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('')

  //--Estado derivado para validación de cuantos TODOs se han completado--//
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //--Estado derivado para buscar TODOs--//
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  //--Funcion para actualizar el loclaStorage--//
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      setTodos(newTodos);
  };

  //--Actualizador del estado--//
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
        //--Forma de pasarle una funcion a un componente si ejecutarla--//
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

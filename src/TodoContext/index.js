import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    //AGREGANDO ESTADOS
    const {
      item: todos, 
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
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

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });
      saveTodos(newTodos);
    };
  
    //--Actualizador del estado--//
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
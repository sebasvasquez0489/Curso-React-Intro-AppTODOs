import React from "react";

//--Custo hooks-- Funcion para utilizar todo lo relacionado con "LocalStorage".--//
function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);

    //--Funcion para actualizar el loclaStorage y el estado.--//
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return {
      item,
       saveItem, 
       loading, 
       error,
    };
}

export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Iniciar Curso ReactJS', completed: true },
//   { text: 'Iniciar Curso Manipulación del DOM', completed: false },
//   { text: 'Continuar curso ReactJS', completed: true },
//   { text: 'Practicar lo aprendido', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.
// stringify(defaultTodos));
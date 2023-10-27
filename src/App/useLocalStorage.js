import React from "react";

//--Custo hooks-- Funcion para utilizar todo lo relacionado con "LocalStorage".--//
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

    //--Funcion para actualizar el loclaStorage y el estado.--//
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return [item, saveItem];
}

export { useLocalStorage };

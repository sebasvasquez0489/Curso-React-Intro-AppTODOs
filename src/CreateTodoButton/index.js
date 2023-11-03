import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className='CreateTodoButton'
    onClick={
      () => {
        setOpenModal(state => !state);
      }
      }
    >Agregar tareas</button>
  );
}

export { CreateTodoButton };
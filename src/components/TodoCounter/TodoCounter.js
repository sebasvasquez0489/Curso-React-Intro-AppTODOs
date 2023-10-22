import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (

  total == completed ? 
    <h2 className='TodoCounter'>Felicidades, has completado todas las tareas ✔</h2>
  :

    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total} </span>Tareas
    </h1>
  );
}

export { TodoCounter };
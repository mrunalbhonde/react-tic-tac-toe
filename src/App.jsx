import { useState } from 'react'

function Square(){

  const [value, setValue] = useState(null);

  function handleClick(){
    //if(value == 'X')setValue('O');
    setValue('X');
  }

  return (
    <button className='square' onClick={handleClick}>{value}</button>
  )
}

function Board() {
  //const [count, setCount] = useState(0)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board

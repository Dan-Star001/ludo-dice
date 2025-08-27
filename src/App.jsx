import React, { useState } from 'react'

const App = () => {
  const [firstDice, setfirstDice] = useState(1);
  const [secondDice, setsecondDice] = useState(1);

  const rollDice = () => {
    setfirstDice(Math.floor(Math.random() * 6) + 1)
    setsecondDice(Math.floor(Math.random() * 6) + 1)

  }


  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{height: '100vh'}}>
        <div>
          <h3 className='text-center fs-1 fw-semibold'>Ludo Dice Roller</h3>
          <div className='d-flex align-items-center gap-5 justify-content-center py-4'>
            <div className='d-flex flex-column align-items-center'>
              <p className='fs-4'>First Dice: <span className='text-danger'>{firstDice}</span></p>
              <img src={`src/assets/dice${firstDice}.png`} width={'60px'} alt="" />
            </div>
            <div className='d-flex flex-column align-items-center'>
              <p className='fs-4 '>Second Dice: <span className='text-danger'x>{secondDice}</span></p>
              <img src={`src/assets/dice${secondDice}.png`} width={'60px'} alt="" />
            </div>
          </div>
            <button onClick={rollDice} className='btn btn-dark btn-lg py-2 mt-5 d-flex mx-auto'>Roll Dice</button>
        </div>
      </div>
    </>
  )
}

export default App
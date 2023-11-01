import { useState } from 'react'
import './App.css'
import { TicTacToe } from './components/Tic-Tac-Toe/tic-tac-toe'

function App() {
  const [st, setSt] = useState(0)
  return ( 
    <div className='App'>
      <TicTacToe/>
    </div>
  )
}

export default App

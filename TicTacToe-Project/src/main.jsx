import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='app'>
    <h1 className='title'>Tic Tac Toe</h1>
    <Board />
  </div>,
)

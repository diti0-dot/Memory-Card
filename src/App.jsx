import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

import Cards from './game/cards.jsx'

function App() {


  return (
    <>
    <div>
      <h1>GoldFish</h1>
      <p><p className="subtitle">Click different Pokémon to score — but click the same one twice and it’s game over 🐟</p></p>
    </div>
    <Cards></Cards>
    </>
  )
}

export default App

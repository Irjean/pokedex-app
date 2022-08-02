import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import PokemonCard from './components/PokemonCard/PokemonCard'
import Home from './pages/Home/Home'
import Pokedex from './pages/Pokedex/Pokedex'

function App() {

  return (
    <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path='/my-pokedex' element={<Pokedex />}/>
            </Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
        <h1>Pokéweb</h1>
        <nav>
          <ul>
            <Link to="/"><li>Pokémon</li></Link>
            <Link to="/my-pokedex"><li>My Pokédex</li></Link>
          </ul>
        </nav>
    </header>
  )
}

export default Header
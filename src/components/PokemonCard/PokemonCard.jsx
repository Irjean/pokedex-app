import React from 'react'
import styles from "./PokemonCard.module.css"

function PokemonCard() {
  return (
    <div className={styles.pokemonCard}>
        <img className={styles.pokemonImg} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="pokémon" />
        <div className={styles.pokemonName}>Salameche</div>
    </div>
  )
}

export default PokemonCard
import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Pokemon.module.css"
import types from "./PokemonTypes.module.css"

function Pokemon() {
    let { id } = useParams()

  return (
    <div className={styles.pokemonPageContainer}>
        <h2>Bulbasaur</h2>
        <div className={`${styles.dispFlex} ${styles.pokemonTypesContainer}`}>
            <div className={types.grass}>Grass</div>
            <div className={types.poison}>Poison</div>
        </div>
        <div className={styles.pokemonStats}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Pokémon" />
            <div className={`${styles.dispFlex} ${styles.listContainer}`}>
                <ul>
                    <li>HP</li>
                    <li>Attack</li>
                    <li>Defense</li>
                    <li>Speed</li>
                    <li>Sp Atk</li>
                    <li>Sp Def</li>
                </ul>
                <ul>
                    <li>255</li>
                    <li>255</li>
                    <li>255</li>
                    <li>255</li>
                    <li>255</li>
                    <li>255</li>
                </ul>
            </div>
        </div>
        <div className={styles.listOuterContainer}>
            <span>Seed Pokémon</span>
            <p>Blah blah la description</p>
        </div>
        <div className={styles.additionalStatsContainer}>
            <h3>Addiotional Stats</h3>
            <div className={styles.additionalStatsListContainer}>
                <div className={styles.additionalStatsList}>
                    <ul>
                        <li>Height</li>
                        <li>Catch Rate</li>
                        <li>Egg groupes</li>
                        <li>Abilities</li>
                    </ul>
                    <ul>
                        <li>255</li>
                        <li>255</li>
                        <li>255</li>
                        <li>255</li>
                    </ul>
                </div>
                <div className={styles.additionalStatsList}>
                    <ul>
                        <li>Height</li>
                        <li>Gender Ratio</li>
                        <li>Hatch Steps</li>
                        <li>EVs</li>
                    </ul>
                    <ul>
                        <li>255</li>
                        <li>255</li>
                        <li>255</li>
                        <li>255</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <span>Is the evolution of :</span>
            <span>Will evolve in :</span>
        </div>
    </div>
  )
}

export default Pokemon
import React from 'react'
import { useSelector } from "react-redux";
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import styles from "./Pokedex.module.css";

function Pokedex() {
  const pokedex = useSelector((store) => store.pokedexReducer);

  return (
    <div className={styles.pokedexContainer}>
      {pokedex.map(i => <PokemonCard name={i.name} id={i.id} key={i.id} />)}
    </div>
  )
}

export default Pokedex
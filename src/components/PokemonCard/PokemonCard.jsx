import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import styles from "./PokemonCard.module.css"
import emptyball from "../../assets/emptyball.png"
import pokeball from "../../assets/pokeball.png"
import { pokedexAdded, pokedexRemoved } from '../../services/pokedex.service'

function PokemonCard(props) {

  const pokedex = useSelector((store) => store.pokedexReducer)

  function isSaved() {
    return pokedex.some(i => i.id == props.id);
  }

  const [saved, setSaved] = useState(isSaved());
  const dispatch = useDispatch();

  return (
    <Link to={`/pokemon/${props.id}`}>
    <div className={styles.pokemonCard}>
        <img className={styles.pokeball} src={saved ? pokeball : emptyball} onClick={(e) => {
          e.preventDefault();
          if(!saved){
            setSaved(true);
            dispatch(pokedexAdded({id: props.id, name: props.name}));
          } else {
            setSaved(false);
            dispatch(pokedexRemoved({id: props.id}));
          }
        }} alt="pokeball" />
        <img className={styles.pokemonImg} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="pokémon" />
        <div className={styles.pokemonName}>{props.name}</div>
    </div>
    </Link>
  )
}

export default PokemonCard
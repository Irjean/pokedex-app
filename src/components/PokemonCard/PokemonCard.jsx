import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import styles from "./PokemonCard.module.css"
import emptyball from "../../assets/emptyball.png"
import pokeball from "../../assets/pokeball.png"
import { addPokedexStorage, pokedexAdded, pokedexRemoved, removePokedexStorage } from '../../services/pokedex.service'

function PokemonCard(props) {

  const pokedex = useSelector((store) => store.pokedexReducer)

  //checks if the pokemon is already in the pokedex
  function isSaved() {
    return pokedex.some(i => i.id == props.id);
  }

  const [saved, setSaved] = useState(isSaved());
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
    <div className={popup ? styles.pokePopupContainer : styles.close}>
      <div className={styles.pokePopup}>
        <p>Remove {props.name.charAt(0).toUpperCase() + props.name.slice(1)} from your pokedex ?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.yesButton} onClick={() => {
            setSaved(false);
            dispatch(pokedexRemoved({id: props.id}));
            removePokedexStorage(props.id);
            setPopup(false)
          }}>Yes</button>
          <button className={styles.noButton} onClick={() => {
            setPopup(false);
          }}>No</button>
        </div>
      </div>
    </div>
    <Link to={`/pokemon/${props.id}`}>
    <div className={styles.pokemonCard}>
        <img className={styles.pokeball} src={saved ? pokeball : emptyball} onClick={(e) => {
          e.preventDefault();
          if(!saved){
            setSaved(true);
            dispatch(pokedexAdded({id: props.id, name: props.name}));
            addPokedexStorage(props.id, props.name);
          } else {
            setPopup(true);
          }
        }} alt="pokeball" />
        <img className={styles.pokemonImg} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="pokémon" />
        <div className={styles.pokemonName}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
    </div>
    </Link>
    </>
  )
}

export default PokemonCard
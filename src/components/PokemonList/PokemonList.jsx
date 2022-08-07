import React, { useEffect, useState } from 'react'
import { usePokemons } from '../../services/api.service';
import PokemonCard from '../PokemonCard/PokemonCard'
import styles from "./PokemonList.module.css";

function PokemonList() {
  const [search, setSearch] = useState("");
  const [trueList, setTrueList] = useState([]);
  const list = usePokemons();
  
  useEffect(() => {
    list.length == 0 ? setTrueList(list) : setTrueList(list.filter(i => i.name.includes(search)))
  }, [search, list]);


  return (
    <div className={styles.listContainer}>
        <input type="text" name="" id="" placeholder='Pokemon name...' onKeyUp={(e) => setSearch(e.target.value)} />
        <div className={styles.pokemonList}>
            {trueList.map(i => <PokemonCard name={i.name} id={i.id} key={i.id} />)}
        </div>
    </div>
  )
}

export default PokemonList
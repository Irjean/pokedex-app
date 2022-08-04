import { useState, useEffect } from 'react';
import axios from 'axios';


//Function that fetch all the existing pokémons in the API
export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokedex/1');
            console.log(data);
            let arr = data.pokemon_entries.map(i => {
                let pokemonId = i.pokemon_species.url.substring(i.pokemon_species.url.indexOf("v2")+2, i.pokemon_species.url.length).match(/\d+/)[0]
                let obj = {
                    name: i.pokemon_species.name,
                    id: pokemonId
                }
                return obj
                })
            setPokemons(arr);
        }
        fetchData();
    }, []); 

    return pokemons;
}

//Function that fetch specific details from a pokemon ID (types, stats...)
// export function usePokemonDetails(id) {
//     useEffect(() => {

//     })
// }
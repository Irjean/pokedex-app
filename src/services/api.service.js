import { useState, useEffect } from 'react';
import axios from 'axios';


//Function that fetch all the existing pokémons in the API
export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokedex/1');
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
export function usePokemonDetails(id) {
    const [pokeDetails, setPokeDetails] = useState();
    useEffect(() => {
        async function fetchPokemonDetails() {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokeDetails(data);
        }
        fetchPokemonDetails();
    }, []);
    return pokeDetails
}

//Function that fetch more specific details from a pokemon ID (types, stats...)
export function usePokemonMoreDetails(id) {
    const [pokeMoreDetails, setPokeMoreDetails] = useState();
    useEffect(() => {
        async function fetchPokemonMoreDetails() {
            await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then(data => {
                axios.get(data.data.evolution_chain.url).then(data2 => {
                    let evols = getEvolutions(data2.data);

                    setPokeMoreDetails({...data.data, evols});
                })
            })
        }
        fetchPokemonMoreDetails();
    }, []);
    return pokeMoreDetails
}

//function to list the possible evolutions of a pokemon
function getEvolutions(chain, evolutions = []) {
    if (chain.chain !== undefined) {
      const name = chain.chain.species?.name;
      const id = chain.chain.species?.url.split("/").reverse()[1];
      evolutions.push({ name, id });
    } else {
      const name = chain.species?.name;
      const id = chain.species?.url.split("/").reverse()[1];
      evolutions.push({ name, id });
    }

    if (chain?.chain !== undefined) {
      if (chain?.chain.evolves_to.length === 0) return evolutions;
      else return getEvolutions(chain?.chain.evolves_to[0], evolutions);
    } else {
      if (chain.evolves_to.length === 0) return evolutions;
      return getEvolutions(chain?.evolves_to[0], evolutions);
    }
  }

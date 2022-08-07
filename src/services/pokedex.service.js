import { createSlice } from "@reduxjs/toolkit"

//Création du state et des reducers
const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: localStorage.getItem("pokedex") !== null ? JSON.parse(localStorage.getItem("pokedex")).list : [],
    reducers: {
      pokedexAdded(state, action) {
        state.push({
          id: action.payload.id,
          name: action.payload.name
        })
      },
      pokedexRemoved(state, action) {
        state.splice(state.findIndex((el) => {return el.id == action.payload.id}), 1)
      }
    }
  })

  
export const { pokedexAdded, pokedexRemoved } = pokedexSlice.actions
export default pokedexSlice.reducer

//Function that add or remove a pokemon from the pokedex in the local storage
export function addPokedexStorage(id, name){
  if(localStorage.getItem("pokedex") !== null){
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  pokedex.list.push({
    id,
    name
  })
  localStorage.setItem("pokedex", JSON.stringify(pokedex));
} else {
  let pokedex = {list: [{id, name}]}
  localStorage.setItem("pokedex", JSON.stringify(pokedex));
}}

export function removePokedexStorage(id){
  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  pokedex.list = pokedex.list.filter(i => i.id !== id);
  localStorage.setItem("pokedex", JSON.stringify(pokedex));
}
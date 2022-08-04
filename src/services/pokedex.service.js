import { createSlice } from "@reduxjs/toolkit"

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: [],
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
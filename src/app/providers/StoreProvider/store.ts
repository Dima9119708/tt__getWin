import { configureStore } from '@reduxjs/toolkit';
import { pokemonsSlice } from 'pages/Pokemons';
import { pokemonTypes } from 'entities/PokemonTypes';
import { pokemonDetailsSlice } from 'pages/PokemonDetails';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    pokemonTypes: pokemonTypes.reducer,
    pokemonDetails: pokemonDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

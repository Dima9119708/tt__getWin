import { configureStore } from '@reduxjs/toolkit';
import { pokemonsSlice } from 'pages/Pokemons';
import { pokemonTypes } from 'entities/PokemonTypes';
import { pokemonDetailsSlice } from 'pages/PokemonDetails';
import { api } from 'shared/config/api/apiConfig';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    pokemonTypes: pokemonTypes.reducer,
    pokemonDetails: pokemonDetailsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
      },
    },
  }),
});

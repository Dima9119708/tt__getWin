import { createSlice } from '@reduxjs/toolkit';
import { getPokemonDetailsRequest } from '../service/pokemonDetailsService';
import { PokemonDetailsState } from '../types/pokemonDetailsTypes';

export const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState: {
    data: {
      stats: [],
      sprites: {
        front_default: '',
      },
      moves: [],
      name: '',
    },
    isLoading: true,
  } as PokemonDetailsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetailsRequest.pending, (draft) => {
      draft.isLoading = true;
    });
    builder.addCase(getPokemonDetailsRequest.fulfilled, (draft, action) => {
      draft.isLoading = false;
      draft.data = action.payload;
    });
    builder.addCase(getPokemonDetailsRequest.rejected, (draft) => {
      draft.isLoading = false;
    });
  },
});

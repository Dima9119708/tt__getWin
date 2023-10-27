import { createSlice } from '@reduxjs/toolkit';
import { PokemonTypesState } from 'entities/PokemonTypes/model/types/pokemonTypes';
import { getPokemonTypesRequest } from 'entities/PokemonTypes/model/service/pokemonTypesService';

export const pokemonTypes = createSlice({
  name: 'pokemonTypes',
  initialState: {
    data: [],
    isLoading: true,
  } as PokemonTypesState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonTypesRequest.pending, (draft) => {
      draft.isLoading = true;
    });
    builder.addCase(getPokemonTypesRequest.fulfilled, (draft, action) => {
      draft.isLoading = false;
      draft.data = action.payload.results;
    });
    builder.addCase(getPokemonTypesRequest.rejected, (draft) => {
      draft.isLoading = false;
    });
  },
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'shared/config/api/apiConfig';
import { AxiosError } from 'axios';
import { PokemonTypesResponse } from 'entities/PokemonTypes/model/types/pokemonTypes';

export const getPokemonTypesRequest = createAsyncThunk(
  'pokemonsTypes',
  async (params, thunkAPI) => {
    try {
      const responsePokemonTypes = await api.get<PokemonTypesResponse>('type');
      return responsePokemonTypes.data;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

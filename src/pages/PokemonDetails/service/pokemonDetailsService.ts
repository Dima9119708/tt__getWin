import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'shared/config/api/apiConfig';
import { AxiosError } from 'axios';
import { PokemonDetailsResponse } from '../types/pokemonDetailsTypes';

export const getPokemonDetailsRequest = createAsyncThunk(
  'pokemonDetails',
  async (id: string, thunkAPI) => {
    try {
      const res = await api.get<PokemonDetailsResponse>(`pokemon/${id}`);
      return res.data;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

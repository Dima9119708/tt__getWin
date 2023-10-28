import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkApiConfig } from 'app/providers/StoreProvider/types';
import { PokemonDetailsResponse } from '../types/pokemonDetailsTypes';

export const getPokemonDetailsRequest = createAsyncThunk<
    PokemonDetailsResponse,
    string,
    ThunkApiConfig<string>
>(
  'pokemonDetails',
  async (id, thunkAPI) => {
    try {
      const res = await thunkAPI.extra.api.get<PokemonDetailsResponse>(`pokemon/${id}`);
      return res.data;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

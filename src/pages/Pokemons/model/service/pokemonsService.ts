import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Pokemon,
  PokemonsResponse,
  PokemonTypesResponse,
} from 'pages/Pokemons/model/types/pokemonsTypes';
import { AxiosError } from 'axios';

import { ThunkApiConfig } from 'app/providers/StoreProvider/types';
import { processMutationPokemon } from 'pages/Pokemons/lib/processMutationPokemon';

export const getPokemonsRequest = createAsyncThunk<
    PokemonsResponse,
    undefined,
    ThunkApiConfig<string>
>(
  'pokemons',
  async (_, thunkAPI) => {
    try {
      const responsePokemons = await thunkAPI.extra
        .api.get<PokemonsResponse>(`pokemon?limit=${Number.MAX_SAFE_INTEGER}`);

      return Object.assign<PokemonsResponse, Omit<PokemonsResponse, 'count'>>(responsePokemons.data, {
        results: responsePokemons.data.results.map((pokemon) => processMutationPokemon(pokemon)),
      });
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getFilteredPokemons = createAsyncThunk<
    Pokemon[],
    undefined,
    ThunkApiConfig<string>
>(
  'pokemons/filtered',
  async (_, thunkAPI) => {
    const {
      searchValue, type, fullData,
    } = thunkAPI.getState().pokemons;

    try {
      let sliceData = fullData;

      if (type) {
        const responsePokemonTypes = await thunkAPI.extra.api.get<PokemonTypesResponse>(`type/${type}`);

        sliceData = responsePokemonTypes.data.pokemon.map(({ pokemon }) => processMutationPokemon(pokemon));
      }

      if (searchValue) {
        sliceData = sliceData.filter((pokemon) => pokemon.name.includes(searchValue));
      }

      return sliceData;
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

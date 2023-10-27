import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'shared/config/api/apiConfig';
import {
  Pokemon,
  PokemonsResponse,
  PokemonTypesResponse,
} from 'pages/Pokemons/model/types/pokemonsTypes';
import { AxiosError } from 'axios';
import { RootState } from 'app/providers/StoreProvider/store';

export const getPokemonsRequest = createAsyncThunk(
  'pokemons',
  async (_, thunkAPI) => {
    try {
      const responsePokemons = await api.get<PokemonsResponse>(`pokemon?limit=${Number.MAX_SAFE_INTEGER}`);

      return Object.assign<PokemonsResponse, Omit<PokemonsResponse, 'count'>>(responsePokemons.data, {
        results: responsePokemons.data.results.map((pokemon) => {
          const parts = pokemon.url.split('/');

          Object.assign<Pokemon, Pick<Pokemon, 'id'>>(pokemon, {
            id: parts[parts.length - 2],
          });

          return pokemon;
        }),
      });
    } catch (e) {
      const error = e as AxiosError;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getFilteredPokemons = createAsyncThunk(
  'pokemons/filter',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const {
      searchValue, type, fullData,
    } = state.pokemons;

    try {
      let sliceData = fullData;

      if (type) {
        const responsePokemonTypes = await api.get<PokemonTypesResponse>(`type/${type}`);

        sliceData = responsePokemonTypes.data.pokemon.map(({ pokemon }) => pokemon);
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

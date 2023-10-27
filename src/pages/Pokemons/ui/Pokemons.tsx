import { useCallback, useEffect } from 'react';
import { getPokemonsRequest } from 'pages/Pokemons';
import { PokemonTypes } from 'entities/PokemonTypes';
import { useGridController } from 'pages/Pokemons/lib/useGridController';
import { OnChangePokemonTypes } from 'entities/PokemonTypes/model/types/pokemonTypes';
import { getFilteredPokemons } from 'pages/Pokemons/model/service/pokemonsService';
import { OnSearch, Search } from 'shared/ui/Search';
import GridPokemons from 'pages/Pokemons/ui/GridPokemons';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Grid } from '@mui/material';
import {
  pokemonsSlice,
} from '../model/slice/pokemonsSlice';
import Pagination from './Pagination';

const Pokemons = () => {
  const dispatch = useAppDispatch();

  const onSearch = useCallback<OnSearch>((searchValue: string) => {
    dispatch(pokemonsSlice.actions.setSearch(searchValue));
    dispatch(getFilteredPokemons());
  }, [dispatch]);

  const onChangeType = useCallback<OnChangePokemonTypes>((_, type) => {
    dispatch(pokemonsSlice.actions.setType(type ? type.name : ''));
    dispatch(getFilteredPokemons());
  }, [dispatch]);

  return (
    <>
      <Grid container justifyContent="end" className="mb-[2rem]" spacing={2}>
        <Grid item xs={12} sm={6} md={9} container justifyContent="end">
          <Search onSearch={onSearch} />
        </Grid>

        <Grid item xs={12} sm={6} md={3} container justifyContent="end">
          <PokemonTypes
            onChange={onChangeType}
            className="w-[100%]"
          />
        </Grid>
      </Grid>

      <GridPokemons />

      <Pagination />
    </>
  );
};

export default Pokemons;

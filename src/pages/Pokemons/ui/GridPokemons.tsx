import {
  Grid,
  Skeleton,
} from '@mui/material';
import { useGridController } from 'pages/Pokemons/lib/useGridController';
import { getPokemonsRequest } from 'pages/Pokemons';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { pokemonsSlice } from '../model/slice/pokemonsSlice';
import CardPokemon from './CardPokemon';

const GridPokemons = () => {
  const data = useAppSelector((state) => state.pokemons.sliceData);
  const isLoading = useAppSelector((state) => state.pokemons.isLoading);
  const limit = useAppSelector((state) => state.pokemons.limit);
  const dispatch = useAppDispatch();

  const { gridSize } = useGridController({
    countCol: {
      xs: 1, sm: 2, md: 3, lg: 4, xl: 6,
    },
    countRow: 6,
    onInitial: (newLimit) => {
      dispatch(pokemonsSlice.actions.setLimit(newLimit));
      dispatch(getPokemonsRequest());
    },
  });

  return (
    <Grid container spacing={2}>
      {
        isLoading && Array.from({ length: limit }, (_, idx) => (
          <Grid key={idx} item xs={gridSize}>
            <Skeleton variant="rounded" className="h-[10rem]" />
          </Grid>
        ))
      }

      {
        !isLoading && data.map((pokemon) => (
          <Grid key={pokemon.id} item xs={gridSize}>
            <CardPokemon {...pokemon} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default GridPokemons;

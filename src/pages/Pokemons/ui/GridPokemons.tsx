import {
  Grid,
  Skeleton, Typography,
} from '@mui/material';
import { useGridController } from 'pages/Pokemons/lib/useGridController';
import { getPokemonsRequest } from 'pages/Pokemons';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import SearchOffIcon from '@mui/icons-material/SearchOff';
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
          <Grid key={`skeleton__${idx}`} item xs={gridSize}>
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

      {
        !isLoading && !data.length && (
          <div className="flex-center flex-col w-full min-h-[40rem]">
            <SearchOffIcon className="h-[15rem] w-[15rem]" />
            <Typography variant="h4">Not Found</Typography>
          </div>
        )
      }
    </Grid>
  );
};

export default GridPokemons;

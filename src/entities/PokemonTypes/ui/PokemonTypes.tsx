import { useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { PokemonTypesProps } from 'entities/PokemonTypes/model/types/pokemonTypes';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { RootState } from 'app/providers/StoreProvider/types';
import { getPokemonTypesRequest } from '../model/service/pokemonTypesService';

const PokemonTypesAutocomplete = (<
    Multiple extends boolean = false,
    DisableClearable extends boolean = false,
>(props: PokemonTypesProps<Multiple, DisableClearable>) => {
  const isLoading = useSelector((state: RootState) => state.pokemonTypes.isLoading);
  const data = useSelector((state: RootState) => state.pokemonTypes.data);
  const dispatch = useAppDispatch();

  const onOpen = () => !data.length && dispatch(getPokemonTypesRequest());

  return (
    <Autocomplete
      {...props}
      onOpen={onOpen}
      loading={isLoading}
      getOptionLabel={(option) => option.name}
      options={data}
      renderInput={(params) => <TextField {...params} label="Types" />}
    />
  );
});

export default PokemonTypesAutocomplete;

import { pokemonsSlice } from 'pages/Pokemons';
import MUIPagination from '@mui/material/Pagination';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';

const Pagination = () => {
  const page = useAppSelector((state) => state.pokemons.page);
  const count = useAppSelector((state) => state.pokemons.count);
  const dispatch = useAppDispatch();

  const onPagination = (_: any, p: number) => {
    dispatch(pokemonsSlice.actions.setPagination(p));
  };

  return (
    <MUIPagination
      page={page}
      color="primary"
      disabled={count === 1}
      onChange={onPagination}
      className="pt-[3rem]"
      count={count}
    />
  );
};

export default memo(Pagination);

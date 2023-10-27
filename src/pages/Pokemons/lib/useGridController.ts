import { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export interface UseGridPokemonsControllerProps {
  countRow: number,
  countCol: {
    xs: 1 | 2 | 3 | 4 | 6,
    sm: 1 | 2 | 3 | 4 | 6,
    md: 1 | 2 | 3 | 4 | 6,
    lg: 1 | 2 | 3 | 4 | 6,
    xl: 1 | 2 | 3 | 4 | 6
  },
  onInitial: (limit: number) => void
}

export const useGridController = (props: UseGridPokemonsControllerProps) => {
  const {
    countCol, countRow, onInitial,
  } = props;

  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  const currentMedia = [
    { name: 'xs', isActive: xs },
    { name: 'sm', isActive: sm },
    { name: 'md', isActive: md },
    { name: 'lg', isActive: lg },
    { name: 'xl', isActive: xl },
  ].filter(({ isActive }) => isActive).at(-1)!;

  const currentCountCol = countCol[currentMedia.name as keyof UseGridPokemonsControllerProps['countCol']];

  const gridSize = 12 / currentCountCol;

  useEffect(() => {
    onInitial(currentCountCol * countRow);
  }, []);

  return {
    gridSize,
  };
};

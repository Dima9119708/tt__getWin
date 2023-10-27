import { createBrowserRouter } from 'react-router-dom';
import LayoutRoot from 'app/LayoutRoot/LayoutRoot';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Pokemons } = await import('../../pages/Pokemons');
          return { Component: Pokemons };
        },
      },
      {
        path: 'pokemon/:id',
        lazy: async () => {
          const { PokemonDetails } = await import('../../pages/PokemonDetails');
          return ({ Component: PokemonDetails });
        },
      },
    ],
  },
]);
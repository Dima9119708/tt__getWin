import { createBrowserRouter } from 'react-router-dom';
import LayoutRoot from 'app/LayoutRoot/LayoutRoot';
import { lazy } from 'react';

const PokemonsPage = lazy(() => import('../../pages/Pokemons'));
const PokemonDetails = lazy(() => import('../../pages/PokemonDetails'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <PokemonsPage />,
        // lazy: async () => {
        //   const { Pokemons } = await import('../../pages/Pokemons');
        //   return { Component: Pokemons };
        // },
      },
      {
        path: 'pokemon/:id',
        element: <PokemonDetails />,
        // lazy: async () => {
        //   const { PokemonDetails } = await import('../../pages/PokemonDetails');
        //   return ({ Component: PokemonDetails });
        // },
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);

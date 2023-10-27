import React, { lazy, Suspense } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import ThemeProvider from 'app/providers/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from 'app/providers/StoreProvider/store';
import LayoutRoot from 'app/LayoutRoot/LayoutRoot';
import { router } from 'app/router/routerConfig';

const PokemonsPage = lazy(() => import('../pages/Pokemons'));
const PokemonDetails = lazy(() => import('../pages/PokemonDetails'));

const App = () => (
  <Suspense fallback={<div />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;

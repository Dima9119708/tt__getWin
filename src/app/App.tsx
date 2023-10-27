import React, { Suspense } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ThemeProvider';
import { router } from 'app/router/routerConfig';
import { Provider } from 'react-redux';
import { store } from 'app/providers/StoreProvider/store';

const App = () => (
  <Suspense fallback={<div />}>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </Suspense>
);

export default App;

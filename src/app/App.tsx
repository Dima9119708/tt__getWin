import React, { Suspense } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from 'app/providers/StoreProvider/store';
import { router } from 'app/router/routerConfig';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Suspense fallback={<div />}>
        <div>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
        <div>BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</div>
        <div>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</div>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </Provider>
);

export default App;

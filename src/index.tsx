import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/styles.css';
import App from 'app/App';
import ErrorBoundary from 'app/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ErrorBoundary>
      <App />
  </ErrorBoundary>,
);

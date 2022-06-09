import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

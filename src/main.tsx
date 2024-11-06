import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Polyfill global object for React Native Web
if (typeof global === 'undefined') {
  (window as any).global = window;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
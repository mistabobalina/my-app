import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import MyApp from './live-app/MyApp';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root'); // Find the root element
const root = createRoot(container); // Create the root

root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// Optional: report web vitals (can be ignored if unused)
reportWebVitals();

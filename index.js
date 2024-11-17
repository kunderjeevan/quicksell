// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import global styles
import './index.css';

// Import the main App component
import App from './App';

// Import the reportWebVitals (optional)
import reportWebVitals from './reportWebVitals';

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Measure performance, can be removed if not needed
reportWebVitals();

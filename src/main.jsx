import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoggedIn from './loggedIn.jsx'; // Import the component with the correct name

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoggedIn /> {/* Use the component with the correct name */}
    {/* <App /> */}
  </React.StrictMode>
);

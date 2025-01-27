// import React from 'react';
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//       <App />

//   </React.StrictMode>
// )
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import App from './App.jsx';
import './index.css';
import store from './redux/store.jsx'; // Import your Redux store (make sure you have it)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
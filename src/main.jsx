import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css"; // Specify weight
import { Theme } from './theme/theme.js';
ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
 <ChakraProvider theme={Theme}>
 <App />
 </ChakraProvider>
   
    
  </React.StrictMode>,
)

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import theme from './themes'
import Routes from './Route';

function App() {
   //@ts-ignore
   // use BrowserRouter with SPA fallback if in dev mode, else HashRouter.
  const Router: (p) => JSX.Element = __SNOWPACK_ENV__.MODE === 'development' ? BrowserRouter : HashRouter
  return (
    <ChakraProvider theme={theme}>
      <Router> 
        <Routes/>
      </Router>
    </ChakraProvider>
  )
}

export default App;



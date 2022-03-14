import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      light: '#f6685e',
      main: '#f44336',
      dark: '#aa2e25', 
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#000',
    },
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
     <BrowserRouter>
    <App />
  </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);



import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PhoneContainer from './components/PhoneContainer';
import HomePage from './pages/Homepage';
import React from 'react';
import RecipeDetailPage from './pages/RecipeDetailPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PhoneContainer>
        <RecipeDetailPage />
      </PhoneContainer>
    </ThemeProvider>
  );
}

export default App;
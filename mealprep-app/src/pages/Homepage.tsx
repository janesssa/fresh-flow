import React from 'react';
import { AppBar, Typography, Button, Box, Container } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container className="home-page">
      <Box component="section" className="this-week" sx={{ mb: 3, flexGrow: 1 }}>
        <Typography variant="h2">Deze week</Typography>
        <Box className="selected-recipes">
          <Typography variant="body1">Je hebt nog geen recepten geselecteerd voor deze week</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Recepten bekijken
        </Button>
      </Box>

      <Box component="section" className="actions" sx={{ display: 'flex', gap: 1.5 }}>
        <Button variant="outlined" color="primary" fullWidth>
          Boodschappenlijst
        </Button>
        <Button variant="contained" color="primary" fullWidth>
          Stappenplan genereren
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
import React, {ReactNode} from 'react';
import { AppBar, Box, Typography } from '@mui/material';

interface PhoneContainerProps {
  children: ReactNode;
}

const PhoneContainer: React.FC<PhoneContainerProps> = ({children}) => {
  return (
    <Box className="app-background">
      <Box className="phone-container">
        <AppBar position="static" sx={{ p: 2, pl: 3, mb: 2}}>
          <Typography variant="h1">Fresh Flow</Typography>
        </AppBar>
        {children}
      </Box>
    </Box>
  );
};

export default PhoneContainer;
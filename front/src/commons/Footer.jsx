import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography align="center"variant="body2" color="text.secondary">
      {`Copyright ©  ${new Date().getFullYear()} Gamer-cado Libre SA.`}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:"center",
      justifyContent:"center",
     
    
    }}
     
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          width:"100%",
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright/>
        </Container>
      </Box>
    </Box>
  );
}
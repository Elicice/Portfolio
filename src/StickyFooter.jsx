import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { blue, green } from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.white" fontSize="19px">
      {'Copyright © '}
      <Link color="inherit" href="https://cecilie.lyshoel.no">
        Cecilie Lyshoel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return ( 
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#200119"
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" fontSize="19px">
            Thank you for visiting!
          </Typography>
          <Copyright />
        </Container>
      
      </Box>
  );
}
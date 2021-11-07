import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function HomePage() {
  return (
    
    <Box
      sx={{
        width: '60%',
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        flexShrink:'1',
        '& > :not(style)': {
          m: 1,
          height: '85vh',
          width: '100%',
          alignItems: 'center',
          padding: '20px',

        },
      }}
      >
            
      <Paper elevation={14} 
        sx={{
            backgroundColor: 'white',
            padding: '10px'
            
        
        }}>
            <h1>Cecilie Lyshoel</h1>
           is a University of Bergen Alumni...
     </Paper>

    </Box>

  );
}
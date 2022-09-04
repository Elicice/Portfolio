import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from './HomePage.css'

export default function HomePage() {
  return (
    
    <Box
      sx={{
        width: '85%',
        margin: '20px auto',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '960px',
        flexShrink:'1',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          alignItems: 'center',
          padding: '10px',

        },
      }}
      >
            
      <Paper elevation={14} 
        sx={{
            backgroundColor: 'white',
            padding: '10px'
            
        
        }}>
            <h1>Cecilie Lyshoel</h1>
             <section className="sectionmrl">
                <img src="/./kaffekopp 4 crop.jpg" alt="Cup of coffee on stacked books, next to a rainy window." className="imageHome" />
              </section>
              <section className="sectionmrl">
                RPA developer with a few hobby projects on the side.
              </section>
              
              
              <section className="sectionmrl">
                <img src="/./kaffebønner hjerte crop.jpg" alt="Coffee beans layed out as the shape of a heart" className="imageHome"/>
              </section>
            
     </Paper>

    </Box>

  );
}
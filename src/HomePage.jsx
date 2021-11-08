import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from './HomePage.css'

export default function HomePage() {
  return (
    
    <Box
      sx={{
        width: '85%',
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        flexShrink:'1',
        '& > :not(style)': {
          m: 1,
          height: '85vh',
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
                I am a University of Bergen alumni with degrees in education and information science.
              </section>
              
              <section className="sectionmrl">
                Learning, being creative, and working with technology are some things I enjoy doing. 
              </section>
              <section className="sectionmrl">
                <img src="/./kaffebønner hjerte crop.jpg" alt="Kaffebønner i form som et hjerte" className="imageHome"/>
              </section>
            
     </Paper>

    </Box>

  );
}
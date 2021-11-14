import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Projects() {
  return (
    
    <><h1>Projects</h1>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Binary clock"
        height="140"
        image="./BinaryClock.png" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Binary Clock
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A binary clock to show the time in a binary way.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/#/Projects/BinaryClock">Demo</Button>
        <Button size="small" href="https://github.com/Elicice/Portfolio/tree/main/src/projects/klokke-app">Source</Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 345, marginTop:'25px'}}>
      <CardMedia
        component="img"
        alt="Weather app preview"
        height="140"
        image="./weatherapp.png" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather App
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tells the weather and how to dress
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/#/Projects/WeatherApp">Demo</Button>
        <Button size="small" href="https://github.com/Elicice/Portfolio/tree/main/src/projects/V%C3%A6rkl%C3%A6r-app">Source</Button>
      </CardActions>
    </Card>
    
    
    </>

    
  );
}

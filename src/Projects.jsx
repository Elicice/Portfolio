import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Projects() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Binary clock"
        height="140"
        image="./BinaryClock.png"
      />
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
  );
}

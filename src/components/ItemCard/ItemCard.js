
import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const ItemCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ItemCard;
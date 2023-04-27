
import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const ItemCard = ( {data} ) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"     
          image={data.img}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description} | ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ItemCard;
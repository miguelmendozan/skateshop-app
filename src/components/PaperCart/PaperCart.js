import * as React from 'react';
import Paper from '@mui/material/Paper';
import "./PaperStyles.css"

const PaperCart = ({data}) => {
  return (
    
      
      <Paper elevation={4} >
        <img className='cart-product-img' src={data.img} alt='img'/>
      </Paper>

      
   
  );
}
export default PaperCart
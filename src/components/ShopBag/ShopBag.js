import {useContext} from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Context/CartContext';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const ShopBag = () => {


  const [cart] = useContext(CartContext)

  const quantity = cart.reduce((total, current) => {
    return total + current.quantity
  
  }, 0)
  

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={quantity} color="success">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
export default ShopBag
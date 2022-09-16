import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useRecoilValue } from 'recoil';
import { cartState, cartTotal } from '../Stores/cartStore';

export const Header = () => {
  const cart = useRecoilValue(cartState);
  const cartTotalAmount = useRecoilValue(cartTotal);

  return (
    <AppBar position='static' color='default' elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Company name
        </Typography>
        <nav>
          <Link variant='button' color='text.primary' href='#' sx={{ my: 1, mx: 1.5 }}>
            Features
          </Link>
          <Link variant='button' color='text.primary' href='#' sx={{ my: 1, mx: 1.5 }}>
            Enterprise
          </Link>
          <Link variant='button' color='text.primary' href='#' sx={{ my: 1, mx: 1.5 }}>
            Support
          </Link>
        </nav>
        <ShoppingCartTwoToneIcon />({cart.length})
        <Typography variant='subtitle2' color='primary' sx={{ mx: 2 }}>
          Total ${cartTotalAmount}
        </Typography>
        <Button href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

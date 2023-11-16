import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { ShoppingBagTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position='static' color='default'>
      <Toolbar>
        <Link to='/'>
          <ShoppingBagTwoTone color='primary' />
          <Typography variant='h6' color='primary'>
            shopy
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
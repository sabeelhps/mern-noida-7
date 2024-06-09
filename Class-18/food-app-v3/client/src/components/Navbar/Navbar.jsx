import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = ()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography sx={{textDecoration:'none'}} component={Link} to="/" color="inherit">Food App</Typography>
          </Typography>
          <Button component={Link} to="/new" color="inherit">New</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
          <Button component={Link} to="/cart" color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

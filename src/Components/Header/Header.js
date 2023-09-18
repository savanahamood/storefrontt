import React, { useState } from 'react';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import SimpleCart from '../SimpleCart/SimpleCart'; // Import your SimpleCart component
import Menu from '@mui/material/Menu';

const navItems = [{ text: 'CART', count: 0 }];
const drawerWidth = 240;

export default function Header(props) {
  const style = {
    fontSize: "xxx-large",
    fontFamily: "monospace",
    color: "#fff",
    height: "60px",
    backgroundColor: "#1e2a38",
  };
  const style1 = {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const cartCount = useSelector((state) => state.cart.cartItems.length);

  //const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //const [isCartOpen, setIsCartOpen] = React.useState(false);

  // const handleCartButtonClick = () => {
  //   setIsCartOpen(!isCartOpen); // Toggle the cart
  // };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#333',
        color: '#000000', // Change text color to black
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#000000" }}>
        STORE FRONT
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton> } key={item.text} disablePadding>
              
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={`${item.text} (${cartCount})`} />
            </ListItemButton>
          </ListItem>
          
        ))}
      </List>
      {/* <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List> */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar style={style} position="static">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            HeIn
          </Typography>
          <IconButton style={style1} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
            <Typography onClick={handleCartButtonClick} variant="h6" color="inherit" noWrap>
              Cart ({cartCount})
              
            </Typography>
            
          </IconButton>
          <Menu
            id="cart-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}


          >
            <SimpleCart
              open={Boolean(anchorEl)}
              onClose={handleClose}

            />
          </Menu>

          <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#333',
              color: '#000000', // Change text color to black
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

        </Toolbar>
      </AppBar>

    </>
  );
}
Header.propTypes = {
  window: PropTypes.func,
};
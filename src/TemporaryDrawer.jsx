import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

export default function TemporaryDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  return (

        <React.Fragment>
          <MenuIcon onClick={toggleDrawer(true)} >Top</MenuIcon>
          <Drawer
            anchor="top"
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 'auto' }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItemButton component="a" href="/#/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component="a" href="/#/Projects">
                  <ListItemIcon>
                    <EmojiFoodBeverageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
  );
}

import * as React from 'react';
import './TopNav.css';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TemporaryDrawer from './TemporaryDrawer';
import NavTabs from './NavTabs';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function TopNav() {
  return (
    <Box id="navBox" sx={{flexGrow: 1}} >
      <AppBar id="navApp" position="static">
        <StyledToolbar id="navBar">
          <IconButton
            edge="start"
            sx={{ mr: 2, display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }}}
          >
          <NavTabs />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' }}}
            
          >
          <TemporaryDrawer />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
          </Typography>
          <IconButton 
            target="_blank" 
            href="https://www.linkedin.com/in/CecilieLyshoel" 
            size="large" 
            aria-label="LinkedIn profile" 
            color="inherit"
            >
          <LinkedInIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="GitHub profil"
            edge="end"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}



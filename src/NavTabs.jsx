import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import style from './NavTabs.css';
import { useLocation } from 'react-router';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}
export default function NavTabs() {
  
  let match = useLocation();
  
  const [value, setValue] = React.useState(() => {

    if (match.pathname.startsWith("/Project"))
      return 1;

    return 0;
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs className="MenuTabs"
        onChange={handleChange}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <LinkTab label="Home" className="navigationTabs" href="/#/" />
        <LinkTab label="Projects" className="navigationTabs" href="/#/Projects" />
      </Tabs>
    </Box>
  );
}
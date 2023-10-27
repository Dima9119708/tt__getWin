import { Outlet } from 'react-router-dom';
import { AppBar, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import logo from 'shared/assets/images/pokeapi_256.png';

const LayoutRoot = () => (
  <div>
    <AppBar position="sticky">
      <Toolbar className="py-[1rem]">
        <img src={logo} alt="logo" className="w-[16.25rem] h-[6.25rem]" />
      </Toolbar>
    </AppBar>
    <Box
      sx={{
        px: { xs: '2rem', sm: '5rem', lg: '10rem' },
        py: { xs: '2rem', sm: '5rem' },
      }}
    >
      <Outlet />
    </Box>
  </div>
);

export default LayoutRoot;

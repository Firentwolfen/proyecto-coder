import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Logo from "../assets/Pokeball_logo.png";
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CartWidget from './CartWidget';
import { useLoginContext } from '../context/LoginContext'
import { Button } from '@mui/material';

const Navbar= () =>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { user, logout } = useLoginContext()

      const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
      
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
      return (
      <AppBar position="static" color='primary'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Link to="/">
          <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src={Logo}
        />
        </Link>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Pokefan Mart
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
               
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Pokefan Mart
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Breadcrumbs aria-label="breadcrumb">
            <Link className='linknav' to="/home">Inicio</Link>
                    <Link className='linknav' to="/productos/plushies">Peluches</Link>
                    <Link className='linknav' to="/productos/toys">Juguetes</Link>
                    <Link className='linknav' to="/productos/clothing">Ropa</Link>
                    <Link className='linknav' to="/productos/figures">Figuras</Link>
                    <Link className='linknav' to="/productos/games">Juegos</Link>
            </Breadcrumbs>
            </Box>
           <CartWidget/>
           <div>
           <Typography
              variant="body1"
              noWrap
              marginLeft={2}
              component="a"
            >
             Bienvenido: {user.email}
            </Typography>
            <Button variant="text" color="error" onClick={logout}>Logout</Button>
            </div>
          </Toolbar>
          
        </Container>
       
      </AppBar>
    );
}
export default Navbar;

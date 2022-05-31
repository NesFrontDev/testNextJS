import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSession, signIn, signOut } from "next-auth/react"
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {


  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { data: session, status } = useSession()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { name: 'Home', page: '/' },
    { name: 'about', page: '/aboutus' },
    { name: 'Movie', page: '/movie' },
    { name: 'Blog', page: '/blog' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>
          <Link href='/'><a><AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link href={page.page}>
                  <Button
                    key={page.name}

                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Typography>
          {session
            ? <div>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session.user.email} src={session.user.avatar} />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={() => signOut()} textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </div>

            : <Button onClick={() => signIn()} color="inherit">Sign in</Button>

          }

        </Toolbar>
      </AppBar>
    </Box>
  )
}
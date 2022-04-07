import React, { useContext } from 'react'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import NightlightRoundIcon from '@mui/icons-material/NightlightRound'
import { IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { ThemeContext } from '../Theme/CustomTheme'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, dw }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: dw,
    width: `calc(100% - ${dw}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function HeaderComponent({ open, toggleDrawer, drawerWidth }) {
  const { handleTheme, iconTheme } = useContext(ThemeContext)

  // const selectedIcon = () => {
  //   return theme === 'light' ? <LightModeIcon /> : <NightlightRoundIcon />
  // }
  return (
    <AppBar position="absolute" open={open} dw={drawerWidth}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Pages App
        </Typography>
        <IconButton color="inherit" onClick={handleTheme}>
          {iconTheme}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

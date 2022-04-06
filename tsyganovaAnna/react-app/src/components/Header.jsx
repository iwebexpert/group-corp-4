import React from 'react'

import { AppBar, Typography, Toolbar, Tooltip, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

import { ThemeModeContext } from '../contexts/ThemeContext'
import { authService } from '../services/auth/authService'
import AccountMenu from './AccountMenu'

export default function Header({ HandleClick }) {
  const theme = useTheme()
  const { colorMode } = React.useContext(ThemeModeContext)
  const userExist = authService.currentUserExist
  return (
    <AppBar position="static">
      <Toolbar>
        <Tooltip title="Menu">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={HandleClick}
            edge="start"
            sx={{
              marginRight: 5,
              ...(!userExist && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Learn project
        </Typography>
        <Tooltip title={`${theme.palette.mode} mode`}>
          <IconButton color="inherit" onClick={colorMode.toogleColorMode}>
            {theme.palette.mode !== 'light' ? <LightModeIcon /> : <NightlightIcon />}
          </IconButton>
        </Tooltip>
        {userExist && <AccountMenu user={authService.currentUser} logout={authService.logout} />}
      </Toolbar>
    </AppBar>
  )
}

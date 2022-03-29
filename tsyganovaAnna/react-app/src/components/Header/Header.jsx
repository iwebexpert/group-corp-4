import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { useTheme } from '@mui/material/styles'
import { ThemeModeContext } from '../../contexts/ThemeContext'

export default function Header() {
  const theme = useTheme()
  const { colorMode } = React.useContext(ThemeModeContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pages
        </Typography>
        <Tooltip title={`${theme.palette.mode} mode`}>
          <IconButton color="inherit" onClick={colorMode.toogleColorMode}>
            {theme.palette.mode !== 'light' ? <LightModeIcon /> : <NightlightIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

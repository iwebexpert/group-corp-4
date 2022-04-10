import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export function ThemeSwitcher({theme}) {
  return (
      <>
        {theme.palette.mode ==='light' ? <LightModeIcon/> : <DarkModeIcon/> }
      </>
  )
}

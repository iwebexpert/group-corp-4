import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Theme } from '@mui/system';


type ThemeSwitcherType = {
  theme: Theme
}

export function ThemeSwitcher({theme}: ThemeSwitcherType) {
  return (
      <>
        {theme.palette.mode ==='light' ? <LightModeIcon/> : <DarkModeIcon/> }
      </>
  )
}

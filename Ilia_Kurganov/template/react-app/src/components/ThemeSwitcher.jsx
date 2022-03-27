import React from 'react'
import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/lightMode';

export function ThemeSwitcher({theme}) {
  return (
      <>
        {theme.palette.mode ==='light' ? <LightModeIcon/> : <DarkModeIcon/> }
      </>
  )
}

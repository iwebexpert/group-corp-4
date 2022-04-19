import * as React from 'react'
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import InfoIcon from '@mui/icons-material/Info'
import FaceIcon from '@mui/icons-material/Face'
import LogoutIcon from '@mui/icons-material/Logout'
import LayersIcon from '@mui/icons-material/Layers'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/pages">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Страницы" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="О Приложении" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Информация
    </ListSubheader>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="Профиль" />
    </ListItemButton>
    <ListItemButton component={Link} to="/logout">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  </React.Fragment>
)

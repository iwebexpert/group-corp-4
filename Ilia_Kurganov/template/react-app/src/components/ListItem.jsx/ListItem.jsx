import * as React from 'react'
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import InfoIcon from '@mui/icons-material/Info';
import HandymanIcon from '@mui/icons-material/Handyman';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="О Приложении" />
    </ListItemButton>
    <ListItemButton component={Link} to="/equipment">
      <ListItemIcon>
        <HandymanIcon />
      </ListItemIcon>
      <ListItemText primary="Оборудование" />
    </ListItemButton>
    <ListItemButton component={Link} to="/branch">
      <ListItemIcon>
        <MapsHomeWorkIcon />
      </ListItemIcon>
      <ListItemText primary="Филиалы" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Информация о пользователе
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

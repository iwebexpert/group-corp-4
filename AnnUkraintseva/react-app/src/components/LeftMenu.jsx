import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import InfoIcon from '@mui/icons-material/Info';
import PagesIcon from '@mui/icons-material/Pages';
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'react-router-dom'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="О приложении" />
    </ListItemButton>
    <ListItemButton component={Link} to="/pagesLink">
      <ListItemIcon>
        <PagesIcon />
      </ListItemIcon>
      <ListItemText primary="Страницы" />
    </ListItemButton>
    <ListItemButton component={Link} to="/commentLink">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Комментарии" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      О пользователе
    </ListSubheader>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <PersonIcon />
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

import React from 'react'
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

const mainListItems = (
    <React.Fragment>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="О проекте" />
      </ListItemButton> 
      <ListItemButton component={Link} to="/show_pages">
        <ListItemIcon>
          <PostAddIcon  />
        </ListItemIcon>
        <ListItemText primary="Список страниц" />
      </ListItemButton>
      <ListItemButton component={Link} to="/profile">
        <ListItemIcon>
          <NoteAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Профиль" />
      </ListItemButton>
      <ListItemButton component={Link} to="/stats">
        <ListItemIcon>
          <QueryStatsIcon/>
        </ListItemIcon>
        <ListItemText primary="Статистика" />
      </ListItemButton>
      <ListItemButton component={Link} to="/logout">
        <ListItemIcon>
          <ExitToAppIcon/>
        </ListItemIcon>
        <ListItemText primary="Выход" />
      </ListItemButton>
    </React.Fragment>
  );

  export default mainListItems
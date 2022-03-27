import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import PostAddIcon from '@mui/icons-material/PostAdd'

const mainListItems = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Item 1" />
      </ListItemButton> 
      <ListItemButton>
        <ListItemIcon>
          <PostAddIcon  />
        </ListItemIcon>
        <ListItemText primary="Item 2" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NoteAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Item 3" />
      </ListItemButton>
    </React.Fragment>
  );

  export default mainListItems
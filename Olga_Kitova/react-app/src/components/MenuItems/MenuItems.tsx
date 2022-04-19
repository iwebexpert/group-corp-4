import React from 'react'
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PostAddIcon from '@mui/icons-material/PostAdd'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import { authService } from 'services/auth/authService'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const user = authService?.currentUserValue
const role = user?.role || null

const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText primary="Back to home" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="About the project" />
    </ListItemButton>
    {role === 'admin' && (
      <ListItemButton component={Link} to="/admin/add_pages">
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add page" />
      </ListItemButton>
    )}
    <ListItemButton component={Link} to="/admin/show_pages">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Page list" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/comments">
      <ListItemIcon>
        <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Comments list" />
    </ListItemButton>
    {role === 'admin' && (
      <>
        <ListItemButton component={Link} to="/admin/users">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users list" />
        </ListItemButton>
        <ListItemButton component={Link} to="/admin/stats">
          <ListItemIcon>
            <QueryStatsIcon />
          </ListItemIcon>
          <ListItemText primary="Logs stats" />
        </ListItemButton>
      </>
    )}
    <ListItemButton component={Link} to="/admin/profile">
      <ListItemIcon>
        <PermContactCalendarIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/logout">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItemButton>
  </React.Fragment>
)

export default mainListItems

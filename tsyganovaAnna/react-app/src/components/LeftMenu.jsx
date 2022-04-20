import React, { useEffect } from 'react'
import {
  Box,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Dashboard, QueryStats, Comment, Group } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { authService } from '../services/auth/authService'

export default function LeftMunu({ isOpenLeftMenu, HandleClick }) {
  const anchor = 'left'
  const [state, setState] = React.useState({
    left: false,
  })

  useEffect(() => {
    if (isOpenLeftMenu) {
      setState({ ...state, [anchor]: true })
      HandleClick(true)
    }
  }, [isOpenLeftMenu, HandleClick])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const isAdmin = authService.isAdmin
  const adminLink = [
    { link: '/admin/pages', name: 'Pages', icon: <Dashboard /> },
    { link: '/admin/users', name: 'Users', icon: <Group /> },
    { link: '/admin/comments', name: 'Comments', icon: <Comment /> },
    { link: '/admin/stats', name: 'Stats', icon: <QueryStats /> },
  ]
  const userLink = []
  const navLink = isAdmin ? [...userLink, ...adminLink] : userLink

  const list = (anchor) => (
    <Box
      sx={{ width: 180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLink.map((text, index) => (
          <ListItemButton component={Link} to={text.link} key={index}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  )
}

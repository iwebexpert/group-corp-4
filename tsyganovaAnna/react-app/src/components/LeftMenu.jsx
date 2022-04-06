import React, { useEffect } from 'react'
import { Box, SwipeableDrawer, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

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

  const navLink = [{ link: '/pages', name: 'Pages' }]

  const list = (anchor) => (
    <Box
      sx={{ width: 180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLink.map((text, index) => (
          <Link to={text.link} key={index}>
            <ListItem button>
              <ListItemText>{text.name}</ListItemText>
            </ListItem>
          </Link>
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

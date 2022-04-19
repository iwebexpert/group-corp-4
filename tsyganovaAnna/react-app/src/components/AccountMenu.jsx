import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Avatar, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import MenuBlock from './MenuBlock'

export default function AccountMenu({ user, logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const getName = () => {
    if (user.name) {
      return user.name.charAt(0)
    }
    return 'U'
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{getName()}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <MenuBlock
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        children={
          <Box>
            <Link to="/profile">
              <MenuItem>
                <Avatar />
                Profile
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        }
      />
    </React.Fragment>
  )
}

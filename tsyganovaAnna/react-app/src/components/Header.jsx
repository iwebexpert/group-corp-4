import React, { useState, useEffect } from 'react'

import { AppBar, Avatar, Typography, Toolbar, Tooltip, IconButton, Link } from '@mui/material'
import { LightMode, Nightlight, Menu } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import AccountMenu from './AccountMenu'
import MenuBlock from './MenuBlock'
import logo from '../assets/logo.png'
import { ThemeModeContext } from '../contexts/ThemeContext'
import { authService } from '../services/auth/authService'
import { getAllPage } from '../store/actions/pageActions'

export default function Header({ HandleClick }) {
  const theme = useTheme()
  const { colorMode } = React.useContext(ThemeModeContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const openMenu = Boolean(anchorEl)
  const dispatch = useDispatch()
  const headerMain = useSelector((state) => state.page.headerMainPages)
  const headerSecondary = useSelector((state) => state.page.headerSubPages)
  const userExist = authService.currentUserExist
  const isAdmin = authService.isAdmin

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    dispatch(getAllPage())
  }, [])

  const dropDownMenu = {
    display: 'flex',
    flexDiection: 'column',
    m: 1,
    mr: 2,
    ml: 2,
    color: 'black',
  }
  const menuStyle = { mr: 3, color: 'white' }

  const showList = (list, style) =>
    list.map((text, index) => (
      <Link
        component={RouterLink}
        to={`/page/${text?.link}`}
        key={index}
        sx={{
          ...style,
          textDecoration: 'none',
          fontFamily: ['Chilanka', 'cursive'].join(','),
        }}
      >
        {text.name}
      </Link>
    ))

  return (
    <>
      <AppBar
        position="static"
        sx={theme.palette.mode !== 'light' ? {} : { backgroundColor: '#7b9d20' }}
      >
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={HandleClick}
              edge="start"
              sx={{
                marginRight: 2,
                ...(!userExist && !isAdmin && { display: 'none' }),
              }}
            >
              <Menu />
            </IconButton>
          </Tooltip>
          <Avatar
            component={RouterLink}
            to="/"
            alt="Logo"
            variant="rounded"
            src={logo}
            sx={{ width: 56, height: 56, marginRight: 3 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Learn project
          </Typography>
          {showList(headerMain, menuStyle)}
          <Typography
            onClick={handleClickMenu}
            variant="h7"
            sx={{ cursor: 'pointer', mr: 2, fontFamily: ['Chilanka', 'cursive'].join(',') }}
          >
            Pages
          </Typography>
          <Tooltip title={`${theme.palette.mode} mode`}>
            <IconButton color="inherit" onClick={colorMode.toogleColorMode}>
              {theme.palette.mode !== 'light' ? <LightMode /> : <Nightlight />}
            </IconButton>
          </Tooltip>
          {userExist && <AccountMenu user={authService.currentUser} logout={authService.logout} />}
        </Toolbar>
      </AppBar>
      <MenuBlock
        anchorEl={anchorEl}
        open={openMenu}
        handleClose={handleCloseMenu}
        children={showList(headerSecondary, dropDownMenu)}
      />
    </>
  )
}

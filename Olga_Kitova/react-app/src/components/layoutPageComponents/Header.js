import React, { useContext, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import {Link as RouterLink} from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
//Context
import { Context } from 'context/Context'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'
import { Tooltip } from '@mui/material'
import {authService} from 'services/auth/authService'
import { getPagesFetch } from 'actions/actionsPages'


export default function Header() {
  const theme = useTheme();
  const {toggleTheme} = useContext(Context)
  const user = authService?.currentUserValue
  const name = user?.name || ''
  const role = user?.role || null
  const dispatch = useDispatch()
  const headers = useSelector(state => state.pages.headerPages)

  useEffect(() => {
     dispatch(getPagesFetch())
  },[])

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'flex-end' }}>
        <div>{name ? `Hello, ${name}` : null}</div>
        <br />
        <Tooltip
            title={
              theme.palette.mode !== 'light' ? 'Choose a light theme' : 'Choose a dark theme'
            }
          >
            <IconButton color="inherit" onClick={() => {
              toggleTheme.toogleThemeMode()
            }}>
            {theme.palette.mode !== 'light' ? <LightModeIcon /> : <NightlightIcon />}
            </IconButton>
            </Tooltip>
{role ?  <Link href='/logout' sx={{marginLeft: '1rem'}} variant="outlined" size="small">
          Log Out</Link> : <Link href='/login' sx={{marginLeft: '1rem'}} variant="outlined" size="small">
          Log In</Link>}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto', paddingBottom: '2rem', paddingTop: '1rem'}}
      >
  {role && (<>
        <Link 
        color="inherit"
        noWrap
        variant="body2"
        sx={{ p: 1, flexShrink: 0 }}
        href="/admin/profile">Profile</Link>
        <Link 
        color="inherit"
        noWrap
        variant="body2"
        sx={{ p: 1, flexShrink: 0 }}
        href="/admin">Dashboard</Link></>)
        }
        {headers.map((section) => (
          <Link
            component={RouterLink}
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            to={`/page/${section.url}`}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
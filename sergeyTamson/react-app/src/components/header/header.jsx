import { AlignHorizontalCenter } from '@mui/icons-material'
import { Box, Button, useTheme } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import React, { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { Link } from 'react-router-dom'
import LoginForm from '../forms/login-form/login-form'
import Modal from '../modal/modal'
import { authService } from '../services/auth/authService'
import './styles.scss'

const Header = ({ toggleThemeMode }) => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const theme = useTheme()

  const handleClick = () => {
    toggleThemeMode((prev) => {
      localStorage.setItem('theme', prev === 'light' ? 'dark' : 'light')
      return prev === 'light' ? 'dark' : 'light'
    })
  }

  const logoutUser = () => {
    authService.logout()
    setUser()
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [localStorage.getItem('user')])

  return (
    <div className={'header header__' + theme.palette.mode}>
      <button className="thema" onClick={handleClick}>
        {theme.palette.mode === 'light' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          </svg>
        )}

        {theme.palette.mode === 'dark' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brightness-high-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        )}
      </button>

      {!user && (
        <Button color="secondary" type="button" onClick={() => setOpen(true)}>
          Вход
        </Button>
      )}

      {user && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.mode === 'light' ? '#3a3f58' : '#f9ac67',
          }}
        >
          <Link to="/profile">
            <Box mr={4} sx={{ fontSize: '24px', fontWeight: '700' }}>
              {user.name}
            </Box>
          </Link>

          <Button color="secondary" type="button" onClick={logoutUser}>
            Выход
          </Button>
        </Box>
      )}

      <Modal open={open} onClose={setOpen}>
        <LoginForm onClose={setOpen} />
      </Modal>
    </div>
  )
}

export default Header

import { Box, Button, useTheme, Link, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LoginForm from '../forms/login-form/login-form'
import { authService } from '../services/auth/authService'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { userFetch, userLogout } from '../../actions/user'
import { AppState } from '../../reducers'

export type HeaderProps = {
  toggleThemeMode: any
}

const Header = ({ toggleThemeMode }: HeaderProps) => {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const theme = useTheme()

  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.data)

  const handleClick = () => {
    toggleThemeMode((prev: 'dark' | 'light') => {
      localStorage.setItem('theme', prev === 'light' ? 'dark' : 'light')
      return prev === 'light' ? 'dark' : 'light'
    })
  }

  const logoutUser = () => {
    authService.logout()
    dispatch(userLogout())
  }

  const handleScroll = () => {
    setScroll(!(window.scrollY < 1))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    dispatch(userFetch())
  }, [])

  return (
    <Box component="header" className={'header header__' + theme.palette.mode}>
      <div className="inner">
        <Link href="/home">LOGO</Link>

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

        <Box>
          <Link mr={4} href="/home/about" underline="none" color="secondary">
            О нас
          </Link>

          <Link href="/admin" underline="none" color="secondary">
            Админ панель
          </Link>
        </Box>

        {!user?.name && (
          <Button color="secondary" type="button" onClick={() => setOpen(true)}>
            Вход
          </Button>
        )}

        {user?.name && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link href="/admin/profile" color="secondary" underline="none" mr={2} fontSize={32}>
              {user.name}
            </Link>

            <Button color="secondary" type="button" onClick={logoutUser}>
              Выход
            </Button>
          </Box>
        )}
      </div>

      <Modal open={open} onClose={setOpen}>
        <LoginForm onClose={setOpen} />
      </Modal>
    </Box>
  )
}

export default Header

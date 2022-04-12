import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { authService } from '../../services/auth/authService'
import { useDispatch } from 'react-redux'
import { userFetch } from '../../../actions/user'

const LoginForm = ({ handleSuccessAuth, onClose }) => {
  const [error, setError] = useState({ email: false, password: false })
  const theme = createTheme()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    setError({ email: false, password: false })
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    if (!email) {
      setError((prev) => ({ ...prev, email: true }))
    }

    if (!password) {
      setError((prev) => ({ ...prev, password: true }))
    }

    if (email && password) {
      authService
        .login(email, password, handleSuccessAuth)
        .then((res) => {
          if (res.message) {
            alert(res.message)
          }
        })
        .then(() => dispatch(userFetch()))
        .then(() => onClose(false))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#ffffff',
          padding: '15px',
          borderRadius: '5px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={error.email && 'Поле не должно быть пустым'}
            error={error.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={error.password && 'Поле не должно быть пустым'}
            error={error.password}
          />

          <Button type="submit" fullWidth variant="contained">
            Вход
          </Button>
          <Button type="button" fullWidth onClick={() => onClose(false)}>
            Закрыть
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default LoginForm

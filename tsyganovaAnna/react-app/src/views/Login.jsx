import React, { useState } from 'react'
import { Container, Typography, Avatar, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import Input from '../components/Fields/Input.jsx'
import { authService } from '../services/auth/authService'

export default function Login({ handleSuccessAuth }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [emptyLogin, setEmptyLogin] = useState(false)
  const [emptyPassword, setEmptyPassword] = useState(false)

  const handleLogin = (event) => setLogin(event.target.value)
  const handlePassword = (event) => setPassword(event.target.value)

  const handleSubmit = () => {
    if (login === '') setEmptyLogin(true)
    if (password === '') setEmptyPassword(true)
    if (login !== '' && password !== '') {
      authService.login(login, password, handleSuccessAuth)
      setEmptyLogin(false)
      setEmptyPassword(false)
      setLogin('')
      setPassword('')
    }
  }
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        border: '1px solid lightgrey',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 2 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ color: 'gray', mb: 3 }}>
        Form authorization
      </Typography>
      <Input
        label="Login"
        error={emptyLogin}
        errorLabel={emptyLogin ? 'Login is empty' : ''}
        value={login}
        onChange={handleLogin}
      />
      <Input
        label="Password"
        error={emptyPassword}
        value={password}
        type="password"
        errorLabel={emptyPassword ? 'Password is empty' : ''}
        onChange={handlePassword}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb: 2 }}
      >
        Login
      </Button>
    </Container>
  )
}

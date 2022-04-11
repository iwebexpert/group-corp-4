import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import { authService } from 'services/auth/authService'


export default function LoginForm({handleSuccessAuth}) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    const email = data.get("email")
    const password = data.get("password")
    if(!email || !password){
      alert("Пожалуйста, заполните все поля формы")
      return
    }
    authService.login(email, password, handleSuccessAuth)
    .then(res => {
      if(res.message) {
        alert(res.message)
      } 
    }).then((data) => {
      window.location.href = '/'
    })
    .catch(err => console.log(err))
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Authorization form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
//Props types
LoginForm.defaultProps = {
  handleSuccessAuth: () => {}
}
LoginForm.propTypes = {
  handleSuccessAuth: PropTypes.func.isRequired
}
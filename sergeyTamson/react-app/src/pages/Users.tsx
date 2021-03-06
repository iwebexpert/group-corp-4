import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUserFetch } from '../actions/user'
import { AppState } from '../reducers'

const UsersPage = () => {
  const users = useSelector((state: AppState) => state.user.allUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allUserFetch())
  }, [])

  return (
    <Box>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Пользователи
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row: UserType) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th">{row.email}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UsersPage

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import PageWrapper from './PageWrapper'
import { getUsers } from '../actions/actionsUsers'
import { AppState } from 'reducers/*';

function PageUsers() {
  const dispatch = useDispatch()
  const users = useSelector((state:AppState) => state.users.data)
  const data = useSelector((state:AppState) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <PageWrapper>
      <Helmet>
        <title>All Users</title>
      </Helmet>
      <Typography component="h3" variant="h6" color="primery" gutterBottom>
        Пользователи
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  )
}

export default PageUsers

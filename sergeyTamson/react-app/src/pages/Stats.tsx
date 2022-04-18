import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography,
} from '@mui/material'
import { statsFetch } from '../actions/stats'
import { AppState } from '../reducers'

const StatsPage = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: AppState) => state.stats.users)

  useEffect(() => {
    dispatch(statsFetch())
  }, [])

  return (
    <>
      <Typography component="h3" color="primary" gutterBottom>
        Действия пользователей
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Имя пользователя</TableCell>
              <TableCell>Роль</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user: UserType, index: number) => (
              <TableRow key={user?.id}>
                <TableCell sx={{ verticalAlign: 'top' }} component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell sx={{ verticalAlign: 'top' }}>{user?.name}</TableCell>
                <TableCell sx={{ verticalAlign: 'top' }}>{user?.role}</TableCell>
                <TableCell sx={{ verticalAlign: 'top' }}>
                  {/* {user?.logs &&
                    user?.logs?.length > 0 &&
                    user?.logs.map((log) => (
                      <ol key={log?.id}>
                        <li>{log?.actions?.date}</li>

                        <li style={{ background: !log?.actions?.bear && 'yellow' }}>
                          {log?.actions.action}
                        </li>
                        <Divider />
                      </ol>
                    ))} */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default StatsPage

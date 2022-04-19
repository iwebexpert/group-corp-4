import React, { useEffect } from 'react'
import { getLogs } from '../actions/actionsLogs'
import PageWrapper from './PageWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { TableBody } from '@mui/material'
import { Helmet } from 'react-helmet'
import { AppState } from 'reducers/*';

function PageLogs() {
  const logs = useSelector((state:AppState) => state.logs.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
  }, [])

  return (
    <PageWrapper>
      <Helmet>
        <title>Logs</title>
      </Helmet>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Action</TableCell>
              <TableCell align="right">role</TableCell>
              {/* {role === 'admin' && <TableCell align="right">&nbsp;</TableCell>} */}
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((stat, i) => (
              <TableRow key={stat.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="right">{stat.action}</TableCell>
                <TableCell align="right">{stat.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  )
}

export default PageLogs

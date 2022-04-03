import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Paper, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Loading from '../Loading'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 'none',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function TableComponent({ pages, removePage, changePage }) {
  return (
    <Grid item xs={12} md={8} lg={10} sx={{ margin: 'auto' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom component="div">
        Список страниц
      </Typography>

      {pages.length ? (
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">Путь</StyledTableCell>
                <StyledTableCell align="right">Заголовок</StyledTableCell>
                <StyledTableCell sx={{ width: '200px' }} align="right">
                  Контент
                </StyledTableCell>
                <StyledTableCell align="right">Id</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pages.map((page, index) => (
                <StyledTableRow key={page.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell align="right">{page.url}</StyledTableCell>
                  <StyledTableCell align="right">{page.title}</StyledTableCell>
                  <StyledTableCell sx={{ width: '200px' }} align="right">
                    {page.content}
                  </StyledTableCell>
                  <StyledTableCell align="right">{page.userId}</StyledTableCell>
                  <StyledTableCell
                    sx={{ display: 'flex', gap: '2px', width: '100%', height: '100%' }}
                  >
                    <Button onClick={() => removePage(page.id)} color="secondary" variant="outlined">
                      Удалить
                    </Button>
                    <Button onClick={() => changePage(page.id)} color="success" variant="outlined">
                      Изменить
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loading />
      )}
    </Grid>
  )
}

TableComponent.propTypes = {
  pages: PropTypes.array,
  removePage: PropTypes.func,
  changePage: PropTypes.func,
}

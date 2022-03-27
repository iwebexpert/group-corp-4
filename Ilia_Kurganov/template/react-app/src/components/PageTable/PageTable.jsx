import React, { useEffect, useState } from 'react'
import './PageTable.scss'
import PropTypes from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Delete from '@mui/icons-material/Delete'
import Edit from '@mui/icons-material/Edit'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import { TextField } from '@mui/material'

const PageTable = ({ tableRows, delitePage }) => {
  const newTableRow2 = () => {
    return tableRows.map((item) => {
      return { ...item, isEdit: true }
    })
  }

  const [newTableRow, setNewTableRow] = useState(newTableRow2)

  useEffect(() => {
    setNewTableRow(newTableRow2)
  }, [tableRows])

  const editRow = (key, action) => {
    setNewTableRow((row) => {
      return row.map((item) => {
        if (item.id === key) {
          return { ...item, isEdit: action === 'save' ? true : false }
        }
        return item
      })
    })
  }

  const changeField = (key, field, value) => {
    setNewTableRow((row) =>
      row.map((item) => {
        if (item.id === key) {
          const f = { ...item }
          f[field] = value
          return f
        }
        return item
      }),
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">UserId</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newTableRow.map((page, i) => (
            <TableRow key={page.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  page.url
                ) : (
                  <TextField
                    id="url"
                    value={page.url}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  page.title
                ) : (
                  <TextField
                    id="title"
                    value={page.title}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  page.content
                ) : (
                  <TextField
                    id="content"
                    value={page.content}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  page.userId
                ) : (
                  <TextField
                    id="userId"
                    value={page.userId}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                )}
              </TableCell>
              <TableCell align="center">
                <Delete
                  sx={{ cursor: 'pointer', color: 'red', ml: 2 }}
                  onClick={() => delitePage(page.id)}
                ></Delete>
                {page.isEdit ? (
                  <Edit
                    sx={{ cursor: 'pointer', color: 'blue', ml: 4 }}
                    onClick={() => editRow(page.id, 'edit')}
                  ></Edit>
                ) : (
                  <SaveAltIcon
                    sx={{ cursor: 'pointer', color: 'green', ml: 4 }}
                    onClick={() => editRow(page.id, 'save')}
                  ></SaveAltIcon>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

PageTable.propTypes = {
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  delitePage: PropTypes.func.isRequired,
}

export default PageTable

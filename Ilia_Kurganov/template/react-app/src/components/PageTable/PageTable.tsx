import React from 'react'
import { Link } from 'react-router-dom'
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
import { PagePayload } from 'src/actions/actionsPages'

type PageTableType = {
  tableRows: PagePayload[]
  delitePage: (id: string) => void
  editPage: (id: string) => void
  savePage: (id: string) => void
  changeField: (id: string, field: string, value: string) => void
  role: string
}

const PageTable = ({
  tableRows,
  delitePage,
  editPage,
  savePage,
  changeField,
  role,
}: PageTableType) => {
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
            {role === 'admin' ? <TableCell align="right">&nbsp;</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((page, i) => (
            <TableRow key={page.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Link to={`${page.id}`}>{i + 1}</Link>
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  <TextField
                    id="url"
                    value={page.url}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                ) : (
                  page.url
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  <TextField
                    id="title"
                    value={page.title}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                ) : (
                  page.title
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  <TextField
                    id="content"
                    value={page.content}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                ) : (
                  page.content
                )}
              </TableCell>
              <TableCell align="right">
                {page.isEdit ? (
                  <TextField
                    id="userId"
                    value={page.userId}
                    variant="outlined"
                    onChange={(e) => changeField(page.id, e.target.id, e.target.value)}
                  />
                ) : (
                  page.userId
                )}
              </TableCell>
              {role === 'admin' ? (
                <TableCell align="center">
                  <Delete
                    className="delete-svg"
                    id="edit-svg-for-jest-only"
                    sx={{ cursor: 'pointer', color: 'red', ml: 2 }}
                    onClick={() => delitePage(page.id)}
                  ></Delete>
                  {page.isEdit ? (
                    <SaveAltIcon
                      className="save-svg"
                      sx={{ cursor: 'pointer', color: 'green', ml: 4 }}
                      onClick={() => savePage(page.id)}
                    ></SaveAltIcon>
                  ) : (
                    <Edit
                      className="edit-svg"
                      sx={{ cursor: 'pointer', color: 'blue', ml: 4 }}
                      onClick={() => editPage(page.id)}
                    ></Edit>
                  )}
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PageTable

import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export default function PageTable({ pages, showButton, onEditPage, onDeletePage }) {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
            {showButton && (
              <>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((tabelItem, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{tabelItem.url}</TableCell>
              <TableCell>{tabelItem.title}</TableCell>
              <TableCell>{tabelItem.content}</TableCell>
              {showButton && (
                <>
                  <TableCell>
                    <IconButton onClick={() => onEditPage(tabelItem.id)} aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => onDeletePage(tabelItem.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
PageTable.defaultProps = {
  pages: [],
  showButton: false,
  onEditPage: () => {},
  onDeletePage: () => {},
}

PageTable.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired || PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ),
  showButton: PropTypes.bool.isRequired,
  onEditPage: PropTypes.func.isRequired,
  onDeletePage: PropTypes.func.isRequired,
}

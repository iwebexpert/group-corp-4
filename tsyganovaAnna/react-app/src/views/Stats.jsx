import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function Stats({ pages }) {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((tabelItem, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{tabelItem.url}</TableCell>
              <TableCell>{tabelItem.title}</TableCell>
              <TableCell>{tabelItem.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
Stats.defaultProps = {
  pages: [],
  showButton: false,
  onEditPage: () => {},
  onDeletePage: () => {},
}

Stats.propTypes = {
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

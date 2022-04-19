import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Link,
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
export default function TableBlock({
  titles,
  showFields,
  fields,
  linkFields,
  showButton,
  onEdit,
  onDelete,
}) {
  return (
    <TableContainer>
      <Table
        stickyHeader
        sx={{ maxHeight: 440, mb: 2 }}
        aria-label="sticky table"
        size={showButton ? 'small' : 'middle'}
      >
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            {titles.map((title) => (
              <TableCell key={title}>{title}</TableCell>
            ))}
            {showButton && (
              <>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((tabelItem, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              {showFields.map((title) => (
                <TableCell key={title}>
                  {linkFields.includes(title) ? (
                    <Link to={`/${tabelItem[title]}`}>{tabelItem[title]}</Link>
                  ) : (
                    tabelItem[title]
                  )}
                </TableCell>
              ))}
              {showButton && (
                <>
                  <TableCell>
                    <IconButton onClick={() => onEdit(tabelItem.id)} aria-label="edit">
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => onDelete(tabelItem.id)} aria-label="delete">
                      <Delete />
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
TableBlock.defaultProps = {
  title: [],
  showFields: [],
  fields: [],
  linkFields: [],
  showButton: false,
  onEdit: () => {},
  onDelete: () => {},
}

TableBlock.propTypes = {
  title: PropTypes.array,
  showFields: PropTypes.array,
  fields: PropTypes.array,
  linkFields: PropTypes.array,
  showButton: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

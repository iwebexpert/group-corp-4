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
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
export default function TableBlock({
  titles,
  showFields,
  fields,
  showButton,
  onEditPage,
  onDeletePage,
}) {
  return (
    <TableContainer>
      <Table stickyHeader sx={{ maxHeight: 440 }} aria-label="sticky table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            {titles.map((title) => (
              <TableCell>{title}</TableCell>
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
                <TableCell>{tabelItem[title]}</TableCell>
              ))}
              {showButton && (
                <>
                  <TableCell>
                    <IconButton onClick={() => onEditPage(tabelItem.id)} aria-label="edit">
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => onDeletePage(tabelItem.id)} aria-label="delete">
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
  showButton: false,
  onEditPage: () => {},
  onDeletePage: () => {},
}

TableBlock.propTypes = {
  title: PropTypes.array,
  showFields: PropTypes.array,
  fields: PropTypes.array,
  showButton: PropTypes.bool.isRequired,
  onEditPage: PropTypes.func.isRequired,
  onDeletePage: PropTypes.func.isRequired,
}

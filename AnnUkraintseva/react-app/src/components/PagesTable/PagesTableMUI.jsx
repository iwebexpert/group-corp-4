import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { authServices } from '../../services/auth/authServices'

const TableCellCustom = styled(TableCell)`
  text-align: center;
`

const DeleteIconCusrom = styled(DeleteIcon)`
  color: rgb(0, 174, 255);
  cursor: pointer;
`

const EditIconCustom = styled(EditIcon)`
  color: rgb(0, 174, 255);
  cursor: pointer;
`
const KeyboardArrowRightIconCustom = styled(KeyboardArrowRightIcon)`
  color: rgb(0, 174, 255);
  cursor: pointer;
`

export function PagesTable({ pages, onDeletePages, getElemForChange, getElemForOpen }) {
  const privileges = authServices.userRole

  return (
    <>
      <Typography component="h2">Заявки на оборудование</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCellCustom>#</TableCellCustom>
            <TableCellCustom>URL</TableCellCustom>
            <TableCellCustom>Заголовок</TableCellCustom>
            <TableCellCustom>Контент</TableCellCustom>
            <TableCellCustom>Автор страницы</TableCellCustom>
            {privileges === 'admin' ?(<><TableCellCustom>&nbsp;</TableCellCustom>
            <TableCellCustom>&nbsp;</TableCellCustom></>):null}
            <TableCellCustom>&nbsp;</TableCellCustom>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((obj, index) => (
            <TableRow key={index}>
              <TableCellCustom>{index + 1}</TableCellCustom>
              <TableCellCustom>{obj.url}</TableCellCustom>
              <TableCellCustom>{obj.title}</TableCellCustom>
              <TableCellCustom>{obj.content}</TableCellCustom>
              <TableCellCustom>{obj.userName}</TableCellCustom>
              {privileges === 'admin' ?(<TableCellCustom onClick={() => onDeletePages(obj.id)}>
                <DeleteIconCusrom color="primary" />
              </TableCellCustom>):null}
              {privileges === 'admin' ? (
                <TableCell onClick={() => getElemForChange(obj.id)}>
                  <EditIconCustom color="primary" />
                </TableCell>
              ) : null}

              {/* --------------- */}
              <TableCell onClick={() => getElemForOpen(obj.url)}>
                <Link to={`/pagesLink/${obj.url}`} target="_blank">
                  <KeyboardArrowRightIconCustom color="primary" />
                </Link>
              </TableCell>
              {/* ---------------- */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

PagesTable.defaultProps = {
  pages: [],
  onDeletePages: () => {},
  getElemForChange: () => {},
}

PagesTable.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      userId: PropTypes.string.isRequired,
    }),
  ),
  onDeletePages: PropTypes.func,
  getElemForChange: PropTypes.func,
}

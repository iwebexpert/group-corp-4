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

import { authServices } from '../services/auth/authServices'

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
export type PageItem={
  id: string
  url: string
  title: string
  content: string
  userId: string
  userName: string
}

type PagesTableProps={
  pages: PageItem[] | null
  onDeletePages: (id: string)=>void
  getElemForChange: (id: string)=> void
  getElemForOpen: (id:string)=>void
}

export default function PagesTable({ pages, onDeletePages, getElemForChange, getElemForOpen }:PagesTableProps) {
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
            <TableCellCustom>Автор страницы</TableCellCustom>
            {privileges === 'admin' ?(<><TableCellCustom>&nbsp;</TableCellCustom>
            <TableCellCustom>&nbsp;</TableCellCustom></>):null}
            <TableCellCustom>&nbsp;</TableCellCustom>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages && pages.map((obj: PageItem, index:number) => (
            <TableRow key={index}>
              <TableCellCustom>{index + 1}</TableCellCustom>
              <TableCellCustom>{obj.url}</TableCellCustom>
              <TableCellCustom>{obj.title}</TableCellCustom>
              <TableCellCustom>{obj.userName}</TableCellCustom>
              {privileges === 'admin' &&(<TableCellCustom  onClick={() => onDeletePages(obj.id)}>
                <DeleteIconCusrom className="btn-delete" color="primary" />
              </TableCellCustom>)}
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

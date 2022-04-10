import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { activeFetch } from '../../actions/activeUser'


import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from '@emotion/styled'

const TableCellCustom=styled(TableCell)`
background-color: rgb(208, 182, 37);
`

export default function ActionUser({activesUser}) {



  return (
    <>
      <Typography component="h2">Действия пользователей</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Роль</TableCell>
            <TableCell>Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activesUser.map((obj, index) => (
            <TableRow key={index}>
              {obj.access ? (
                <>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{obj.name}</TableCell>
                  <TableCell>{obj.email}</TableCell>
                  <TableCell>{obj.role}</TableCell>
                  <TableCell>{obj.action}</TableCell>
                </>
              ) : (
                <>
                  <TableCellCustom>{index + 1}</TableCellCustom>
                  <TableCellCustom>{obj.name}</TableCellCustom>
                  <TableCellCustom>{obj.email}</TableCellCustom>
                  <TableCellCustom>{obj.role}</TableCellCustom>
                  <TableCellCustom>{obj.action}</TableCellCustom>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

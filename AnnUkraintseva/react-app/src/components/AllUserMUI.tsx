import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Helmet } from 'react-helmet'
import { UsersPayload } from 'actions/allUser'


type AllUserProps={
  allUser: UsersPayload[]
}

export default function AllUser({allUser}:AllUserProps) {
  return (
    <>
      <Helmet>
        <title>Все пользователи</title>
      </Helmet>
      <Typography component="h2">Пользователи</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Роль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUser && allUser.map((obj, index) => (
            <TableRow key={index}>
                <>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{obj.name}</TableCell>
                  <TableCell>{obj.email}</TableCell>
                  <TableCell>{obj.role}</TableCell>
                </>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

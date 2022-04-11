import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from '@emotion/styled'
import jwt_decode from "jwt-decode"
import { authServices } from '../../services/auth/authServices'


export default function AllUser() {
  const [allUsers, setAllUsers]= useState([])
  // const [allUser, setAllUser] = useState([])

  // const addAllUserFromServer = () => {
  //    fetch('/api/users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllUser(data)
  //       console.log('dataAllUser', data)
        
  //     })
  // }

  useEffect(() => {
    // fetch('/api/users')
    // .then((response) => response.json())
    // .then((data) => {
    //   setAllUser(data)
    //   console.log('dataAllUser', data)
      
    // })
    setAllUsers(authServices.getAllUser)
    // setAllUser(authServices.getAllUser)
    }, [])

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
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((obj, index) => (
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

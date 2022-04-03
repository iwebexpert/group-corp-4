import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Typography} from '@mui/material';
import {getUsersWithLogsFetch} from 'actions/actionsStats'
import {roleName} from './PageProfile'
import styled from '@emotion/styled';

  const CustomeList = styled.li`
  background-color: #f0d800;
  `

  export default function PageStats() {
    const dispatch = useDispatch()
    const {users} =  useSelector(state => state.stats)
    

    useEffect(() => {
        dispatch(getUsersWithLogsFetch())
    },[])

  return (<>
  <Typography component="h3" color="primary" gutterBottom>Cтатистика по действиям пользователей</Typography>
  <br />
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№ п/п</TableCell>
            <TableCell>Имя пользователя</TableCell>
            <TableCell>Роль</TableCell>
            <TableCell>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell sx={{"verticalAlign": "top"}} component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{user.name}</TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{roleName[user.role]}</TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{user.logs.length < 1 ? '' : user.logs.map(log => (
                  <ol key={log.id}>
                      <li>{log.actions.date}</li>
                      {!log.actions.bear ? <CustomeList>Попытка: {log.actions.action}</CustomeList> :
                      <li>{log.actions.action}</li>}
                      < Divider />
                  </ol>
              )) 
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </>)
}

import React, {useState, useEffect} from 'react'
import ContainerWrapper from './ContainerWrapper'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from '@emotion/styled'

const TableCellCusrom=styled(TableCell)`
background-color: rgb(139, 124, 25); 
`


export function PageLoggerUser() {

  const [loggerUser, setLoggerUser]= useState([])
  
  const addLoggerFromServer = () => {
    fetch('/api/logger')
      .then((response) => response.json())
      .then((data) => setLoggerUser(data))
  }

  useEffect(() => {    
    addLoggerFromServer()    
  }, [])


  

  return (
    <ContainerWrapper>
      <>
    
    <Typography component = 'h2'>Заявки на оборудование</Typography>
  <Table size='small'>
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
    {loggerUser.map((obj, index) => (
      <TableRow key={index}>
        {obj.access ?
          <>
          <TableCell >{index + 1}</TableCell>
          <TableCell >{obj.name}</TableCell>
          <TableCell >{obj.email}</TableCell>
        <TableCell >{obj.role}</TableCell>
        <TableCell >{obj.action}</TableCell>

          </>
        :
          <>
          <TableCellCusrom >{index + 1}</TableCellCusrom>
          <TableCellCusrom >{obj.name}</TableCellCusrom>
          <TableCellCusrom >{obj.email}</TableCellCusrom>
          <TableCellCusrom >{obj.role}</TableCellCusrom>
          <TableCellCusrom >{obj.action}</TableCellCusrom>
          </>
        }
        
      </TableRow>
    ))}
  </TableBody>
</Table>

</>
    </ContainerWrapper>
  )
}

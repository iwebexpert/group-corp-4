import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled'

const DeleteIconCusrom=styled(DeleteIcon)`
  color: rgb(0, 174, 255);
  cursor: pointer;
`

const EditIconCustom = styled(EditIcon)`
  color: rgb(0, 174, 255);
  cursor: pointer;
`

export function PagesTable({
  pages,
  onDeletePages,
  getElemForChange,
}) {
  return (
    <>
    
          <Typography component = 'h2'>Заявки на оборудование</Typography>
        <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Заголовок</TableCell>
            <TableCell>Контент</TableCell>
            <TableCell>Пользователь</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((obj, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{obj.url}</TableCell>
              <TableCell>{obj.title}</TableCell>
              <TableCell>{obj.content}</TableCell>
              <TableCell>{obj.userId}</TableCell>
              <TableCell onClick={()=>onDeletePages(obj.id)}><DeleteIconCusrom color ="primary"/>
              </TableCell>
              <TableCell onClick={()=>getElemForChange(obj.id)}><EditIconCustom color="primary"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </>
  )
}

PagesTable.defaultProps={
  pages:[],
  onDeletePages: ()=>{},
  getElemForChange: ()=>{},
}


PagesTable.propTypes={
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    userId: PropTypes.number.isRequired,
  })),
  onDeletePages: PropTypes.func,
  getElemForChange:PropTypes.func,
}

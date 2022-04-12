import {
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageDelete } from '../../actions/page.js'
import { userFetch } from '../../actions/user.js'
import CreatePageForm from '../forms/create-page-form/create-page-form.jsx'
import Modal from '../modal/modal.jsx'
import { authService } from '../services/auth/authService.jsx'

const PageTable = ({ page }) => {
  const [open, setOpen] = useState(false)
  const [dataObj, setDataObj] = useState({})

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.data)

  const onDeletePage = (id) => {
    dispatch(pageDelete(id))
  }

  const onEditPage = (obj) => {
    setDataObj(obj)
    setOpen(true)
  }

  return (
    <>
      <Typography variant="h4" mb={2}>
        Список всех страниц
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">URL</TableCell>
              <TableCell align="right">Название</TableCell>
              <TableCell align="right">Контент</TableCell>
              <TableCell align="right">ID пользователя</TableCell>
              {user?.role === 'admin' && <TableCell align="right">&nbsp;</TableCell>}
              {user?.role === 'admin' && <TableCell align="right">&nbsp;</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {page.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">
                  <Link href={row.url}>{row.url}</Link>
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.content}</TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                {user?.role === 'admin' && (
                  <TableCell align="right" onClick={() => onDeletePage(row.id)}>
                    <Button>Удалить</Button>
                  </TableCell>
                )}
                {user?.role === 'admin' && (
                  <TableCell align="right" onClick={() => onEditPage(row)}>
                    <Button>Редактировать</Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={setOpen}>
        <CreatePageForm item={dataObj} textButton="изменить данные страницы" onClose={setOpen} />
      </Modal>
    </>
  )
}

export default PageTable

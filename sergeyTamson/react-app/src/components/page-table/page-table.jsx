import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CreatePageForm from '../forms/create-page-form/create-page-form.jsx'
import Modal from '../modal/modal.jsx'
import { authService } from '../services/auth/authService.jsx'

const PageTable = ({ page, setPage, handleEditPage }) => {
  const [open, setOpen] = useState(false)
  const [dataObj, setDataObj] = useState({})
  const [user, setUser] = useState(null)

  const onDeletePage = (id) => {
    const filteredItems = page.filter((item) => item.id !== id)
    setPage(filteredItems)
  }

  const onEditPage = (obj) => {
    setDataObj(obj)
    setOpen(true)
  }

  //TODO
  useEffect(() => {
    const currentUser = authService.currentUserValue
    setUser(currentUser)
  }, [])

  return (
    <>
      <Typography variant="h2">Список всех страниц</Typography>

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
                <TableCell align="right">{row.url}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.content}</TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                {user?.role === 'admin' && (
                  <TableCell align="right" onClick={() => onDeletePage(row.id)}>
                    Удалить
                  </TableCell>
                )}
                {user?.role === 'admin' && (
                  <TableCell align="right" onClick={() => onEditPage(row)}>
                    Редактировать
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={setOpen}>
        <CreatePageForm
          item={dataObj}
          onAddPage={handleEditPage}
          textButton="изменить данные страницы"
          onClose={setOpen}
        />
      </Modal>
    </>
  )
}

export default PageTable

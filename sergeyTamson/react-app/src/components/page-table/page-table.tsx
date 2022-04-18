import {
  Button,
  Link,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageDelete } from '../../actions/page'
import { AppState } from '../../reducers/index'
import EditPageForm from '../forms/edit-page-form/edit-page-form'

const PageTable = () => {
  const [open, setOpen] = useState(false)
  const [dataObj, setDataObj] = useState({})

  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.user.data)
  const pages = useSelector((state: AppState) => state.page.data)

  const onDeletePage = (id: any) => {
    dispatch(pageDelete(id))
  }

  const onEditPage = (obj: any) => {
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
            {pages.map((row: any) => (
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
        <EditPageForm item={dataObj} onClose={setOpen} />
      </Modal>
    </>
  )
}

export default PageTable

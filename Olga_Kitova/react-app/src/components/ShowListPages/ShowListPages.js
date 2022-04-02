import React, {useContext, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {deletePagesFetch, getPagesFetch, writeCurrentIdByEditPages} from 'actions/actionsPages'
import {Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PropTypes from 'prop-types'
import {Context} from '../../context/Context'
import styled from '@emotion/styled'

const CustomEditBtnAdmin = styled(EditIcon)`color: #1976d2; cursor:pointer;`
const CustomEditBtnUser = styled(EditIcon)`color: rgb(128 128 128); cursor:pointer;`
const CustomDeleteBtn = styled(DeleteIcon)`color: #ff0000de; cursor:pointer;`

export default function ShowListPages({ role }) {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pages.data)

  useEffect(() => {
    dispatch(getPagesFetch())
  },[])

     //Context data
    const {changeWindowEdit} = useContext(Context)

    const getOnPagesObjectId = (id) => {
      dispatch(writeCurrentIdByEditPages(id))
    }

    const deletePages = (id) => {
      dispatch(deletePagesFetch(id))
    }
    
  return (
    <Box>
        <Typography component="h2">Список созданных страниц</Typography>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell>№ п/п</TableCell>
                    <TableCell>Адрес страницы</TableCell>
                    <TableCell>Название</TableCell>
                    <TableCell>Содержимое</TableCell>
                    <TableCell>Id пользователя</TableCell>
                    <TableCell>Редактировать</TableCell>
                    {role === 'admin' && <TableCell>Удалить</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {pages ? pages.map((obj, index) => (
                    <TableRow key={obj.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{obj.url}</TableCell>
                    <TableCell>{obj.title}</TableCell>
                    <TableCell className="TableCell-content-small">{obj.content}</TableCell>
                    <TableCell>{obj.userId}</TableCell>
                    <TableCell>
                      {role==='user'? <CustomEditBtnUser onClick={() => {
                        getOnPagesObjectId(obj.id);
                        changeWindowEdit()
                    }}/> :
                    <CustomEditBtnAdmin onClick={() => {
                      getOnPagesObjectId(obj.id);
                      changeWindowEdit()
                  }}/>}
                    </TableCell>
                    <TableCell>
                      {role === 'admin' &&  <CustomDeleteBtn
                    onClick={() => deletePages(obj.id)} /> }
                    </TableCell>
                </TableRow>
                )) : <TableRow><TableCell colSpan="7">Страницы не созданы</TableCell></TableRow>}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  )
}
//Props types
ShowListPages.defaultProps = {
  role: ""
}
ShowListPages.propTypes = {
role: PropTypes.string.isRequired
}

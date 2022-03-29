import React, {useContext} from 'react'
import {Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PropTypes from 'prop-types'
import {Context} from '../../context/Context'
import styled from '@emotion/styled'

const CustomEditBtn = styled(EditIcon)`color: #1976d2; cursor:pointer;`;
const CustomDeleteBtn = styled(DeleteIcon)`color: #ff0000de; cursor:pointer;`;

export default function ShowListPages({addPages, deleteOnPagesObject, getOnPagesObject, role}) {
     //Context data
    const {changeWindowEdit} = useContext(Context);
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
                    {role != "user" && <>
                    <TableCell>Редактировать</TableCell>
                    <TableCell>Удалить</TableCell>
                    </>}
                </TableRow>
            </TableHead>
            <TableBody>
                {addPages.length >= 1 ? addPages.map((obj, index) => (
                    <TableRow key={obj.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{obj.url}</TableCell>
                    <TableCell>{obj.title}</TableCell>
                    <TableCell className="TableCell-content-small">{obj.content}</TableCell>
                    <TableCell>{obj.userId}</TableCell>
                    { role != "user" && <><TableCell>
                      <CustomEditBtn onClick={() => {
                        getOnPagesObject(obj);
                        changeWindowEdit()
                    }}/></TableCell>
                    <TableCell><CustomDeleteBtn
                    onClick={() => deleteOnPagesObject(obj.id)}/></TableCell>
                    </>}
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
    role: "",
    addPages: [],
    deleteOnPagesObject: () => {},
    getOnPagesObject: () => {}
  }
ShowListPages.propTypes = {
  role: PropTypes.string.isRequired,
  addPages: PropTypes.arrayOf(PropTypes.shape({
    url:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired
  })),
  deleteOnPagesObject: PropTypes.func.isRequired,
  getOnPagesObject: PropTypes.func.isRequired,
}

import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../../context/Context'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import CreateFormBase from '../CreateFormBase/CreateFormBase';

export default function EditPagesForm({editPagesObject, editOnPagesObjectFunc }) {
    const [editId, setEditId] = useState('');
    const [editUrl, setEditUrl] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editUserId, setEditUserId] = useState('');
     //Context data
   const {openEdit, changeWindowEdit} = useContext(Context);
    // Function that keeps track of state, accepts an object, or clears fields
    const changeFormData = (obj) => {
        setEditId(obj?.id || '')
        setEditUrl(obj?.url || '');
        setEditTitle(obj?.title || '');
        setEditContent(obj?.content || '');
        setEditUserId(obj?.userId || '');
    }
    useEffect(() => {
        changeFormData(editPagesObject)
    }, [editPagesObject])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch(name) {
          case 'editUrl': setEditUrl(value);
          break;
          case 'editTitle': setEditTitle(value);
          break;
          case 'editContent': setEditContent(value);
          break;
          case 'editUserId': setEditUserId(+value);
          default: 'Нет данных';
          break;
        }
      }
    const handleOnSubmit = () => {
        const data = {
            id: editId,
            url: editUrl,
            title: editTitle,
            content: editContent,
            userId: editUserId,
        }
        // Send the object to the App component to write to the state
        editOnPagesObjectFunc(data);
        //Clear form
        changeFormData()
        //Close open edit window
        changeWindowEdit()
    }
    const handleOnClose = () => {
        changeWindowEdit()
    }
  return (
        <Dialog open={openEdit}>
        <DialogTitle>Редактировать страницу</DialogTitle>
        <DialogContent>
            <CreateFormBase arrayField={[
                {label:"ID страницы", name:"editId",disabled:true, value:editId},
                {label:"Ссылка на страницу", name:"editUrl", onChange:handleChange, value:editUrl},
                {label:"Название страницы", name:"editTitle", onChange:handleChange, value:editTitle},
                {label:"Содержимое страницы",multiline:true,minRows:'6',name:"editContent",
                onChange:handleChange,value:editContent,disabled:editTitle?.length < 1},
                {label:"Идентификатор пользователя", name:"editUserId", type:"number",
                 onChange:handleChange, value:editUserId}
            ]}/>
        </DialogContent>
            <DialogActions>
            <Button variant="contained" onClick={handleOnSubmit}>Редактировать страницу</Button>
            <Button variant="contained" color="secondary" onClick={handleOnClose}>Закрыть без сохранения</Button>
            </DialogActions>
        </Dialog>
        )
}
//Props types
EditPagesForm.defaultProps = {
    editPagesObject: {},
    editOnPagesObjectFun: () => {},
  }

EditPagesForm.propTypes = {
    editPagesObject: PropTypes.shape({
        url:PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    editOnPagesObjectFunc: PropTypes.func.isRequired
}
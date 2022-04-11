import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from 'context/Context'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import CreateFormBase from '../CreateFormBase/CreateFormBase'
import { useDispatch, useSelector } from 'react-redux'
import {clearCurrentIdByEditPages, editPagesFetch} from 'actions/actionsPages'

export default function EditPagesForm({ userId }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.pages.data)
    const currentId = useSelector((state) => state.pages.currentId)
    const [editId, setEditId] = useState('')
    const [editUrl, setEditUrl] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editContent, setEditContent] = useState('')

     //Context data
   const {openEdit, changeWindowEdit} = useContext(Context)

    // Function that keeps track of state, accepts an object, or clears fields
    const changeFormData = (obj) => {
        setEditId(obj?.id || '')
        setEditUrl(obj?.url || '')
        setEditTitle(obj?.title || '')
        setEditContent(obj?.content || '')
    }

    useEffect(() => {
        let pageByEdit = data ? data.find(item => item.id === currentId) : null
        changeFormData(pageByEdit)
    }, [currentId])

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        switch(name) {
          case 'editUrl': setEditUrl(value);
          break;
          case 'editTitle': setEditTitle(value);
          break;
          case 'editContent': setEditContent(value);
          break;
          default: 'There is not data';
          break;
        }
      }

    const handleOnSubmit = () => {
        const data = {
            id: editId,
            url: editUrl,
            title: editTitle,
            content: editContent,
            userId: userId,
        }
        // Edit pages
        dispatch(editPagesFetch(data))
        //Clear form
        changeFormData()
        //Close open edit window
        changeWindowEdit()
    }

    const handleOnClose = () => {
        // Reset current ID
        dispatch(clearCurrentIdByEditPages())
        changeWindowEdit()
    }
    return (
        <Dialog open={openEdit}>
        <DialogTitle>Edit page</DialogTitle>
        <DialogContent>
            <CreateFormBase arrayField={[
                {label:"Page Id", name:"editId",disabled:true, value:editId},
                {label:"Page address", name:"editUrl", onChange:handleChange, value:editUrl},
                {label:"Page title", name:"editTitle", onChange:handleChange, value:editTitle},
                {label:"Page content",multiline:true,minRows:'6',name:"editContent",
                onChange:handleChange,value:editContent,disabled:editTitle?.length < 1}
            ]}/>
        </DialogContent>
            <DialogActions>
            <Button variant="contained" onClick={handleOnSubmit}>Edit page</Button>
            <Button variant="contained" color="secondary" onClick={handleOnClose}>Сlose without saving</Button>
            </DialogActions>
        </Dialog>
        )
}
//Props types
EditPagesForm.defaultProps = {
    userId: 0
  }
  EditPagesForm.propTypes = {
  userId: PropTypes.number.isRequired
  }
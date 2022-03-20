import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../../context/Context'

export default function EditPagesForm({editPagesObject, editOnPagesObjectFunc }) {
    const [editId, setEditId] = useState('');
    const [editUrl, setEditUrl] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');
    const [editUserId, setEditUserId] = useState('');
     //Context data
    const {openEdit, changeWindowEdit} = useContext(Context);
    
    useEffect(() => {
        setEditId(editPagesObject.id)
        setEditUrl(editPagesObject.url);
        setEditTitle(editPagesObject.title);
        setEditContent(editPagesObject.content);
        setEditUserId(editPagesObject.userId);
    }, [editPagesObject])

    const handleEditUrlChange = (event) => {
        setEditUrl(event.target.value)
    }
    const handleEditTitleChange = (event) => {
        setEditTitle(event.target.value)
    }
    const handleEditContentChange = (event) => {
        setEditContent(event.target.value)
    }
    const handleEditUserIdChange = (event) => {
        setEditUserId(event.target.value)
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
        setEditId('');
        setEditUrl('');
        setEditTitle('');
        setEditTitle('');
        setEditContent('');
        setEditUserId('');
        //Close open edit window
        changeWindowEdit()
    }

    const handleOnClose = () => {
        changeWindowEdit()
    }
  return (
    <section className={openEdit ? "form__wrapper form__wrapper--edit" : "form__wrapper form__wrapper--edit form__wrapper--close"}>
        <h2>Редактировать страницу</h2>
        <div className="form">
        <div>
                <label htmlFor="idEdit">ID страницы</label>
                <input id="idEdit" type="text" disabled value={editId}/>
            </div>
            <div>
                <label htmlFor="urlEdit">Ссылка на страницу</label>
                <input id="urlEdit" type="text" onChange={handleEditUrlChange} value={editUrl}/>
            </div>
            <div>
                <label htmlFor="titleEdit">Название страницы</label>
                <input id="titleEdit" type="text" onChange={handleEditTitleChange} value={editTitle} />
            </div>
            <div>
                <label htmlFor="contentEdit">Содержимое страницы</label>
                <textarea
                 rows="10" 
                 id="contentEdit" 
                 onChange={handleEditContentChange} 
                 value={editContent}
                 disabled={editTitle?.length < 1}  />
            </div>
            <div>
                <label htmlFor="userIdEdit">Идентификатор пользователя</label>
                <input id="userIdEdit" type="number" onChange={handleEditUserIdChange} value={editUserId} />
            </div>
            <div>
                <input type="button" value="Редактировать страницу" onClick={handleOnSubmit}/>
                <input type="button" className="button--close" value="Закрыть без сохранения" onClick={handleOnClose}/>
            </div>
        </div>
    </section>
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
        userId: PropTypes.number
    }),
    editOnPagesObjectFunc: PropTypes.func.isRequired
}
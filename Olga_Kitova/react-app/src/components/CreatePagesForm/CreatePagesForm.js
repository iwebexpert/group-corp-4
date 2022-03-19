import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export default function CreatePagesForm({addOnPagesObject}) {
    const urlFocus = useRef(null);
    const [addUrl, setAddUrl] = useState('');
    const [addTitle, setAddTitle] = useState('');
    const [addContent, setAddContent] = useState('');
    const [addUserId, setAddUserId] = useState(1);

    useEffect(() => {
        if(urlFocus) urlFocus.current.focus();
    }, [])

    const handleAddUrlChange = (event) => {
        setAddUrl(event.target.value)
    }
    const handleAddTitleChange = (event) => {
        setAddTitle(event.target.value)
    }
    const handleAddContentChange = (event) => {
        setAddContent(event.target.value)
    }
    const handleAddUserIdChange = (event) => {
        setAddUserId(event.target.value)
    }
    const handleOnSubmit = () => {
        //Validate data
        if(!addUrl || !addTitle || !addContent) {
            alert('Не заполнены обязательные поля');
            return;
        }
        const data = {
            id: uuidv4(),
            url: addUrl,
            title: addTitle,
            content: addContent,
            userId: addUserId,
        }
        addOnPagesObject(data);
        //Clear form
        setAddUrl('');
        setAddTitle('');
        setAddTitle('');
        setAddContent('');
        setAddUserId(1);

    }
  return (
    <section className="form__wrapper">
        <h2>Добавить страницу</h2>
        <div className="form">
            <div>
                <label htmlFor="url">Ссылка на страницу</label>
                <input ref={urlFocus} id="url" type="text" onChange={handleAddUrlChange} value={addUrl}/>
            </div>
            <div>
                <label htmlFor="title">Название страницы</label>
                <input id="title" type="text" onChange={handleAddTitleChange} value={addTitle} />
            </div>
            <div>
                <label htmlFor="content">Содержимое страницы</label>
                <textarea 
                rows="10"
                 id="content" 
                 onChange={handleAddContentChange} 
                 value={addContent}
                 disabled={addTitle.length < 1}  />
            </div>
            <div>
                <label htmlFor="userId">Идентификатор пользователя</label>
                <input id="userId" type="number" onChange={handleAddUserIdChange} value={addUserId} />
            </div>
            <div>
                <input type="button" value="Добавить страницу" onClick={handleOnSubmit}/>
            </div>
        </div>
    </section>
  )
}
//Props types
CreatePagesForm.defaultProps = {
    addOnPagesObject: () => {},
  }

CreatePagesForm.propTypes = {
    addOnPagesObject: PropTypes.func.isRequired
}

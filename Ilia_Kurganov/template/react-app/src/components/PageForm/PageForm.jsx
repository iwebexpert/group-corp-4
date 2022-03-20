import React, { useEffect,  useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';
import { Consumer } from '../../context/ThemeContext'
import './PageForm.scss'

const PageForm = ({ addRows }) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const [content, setContent] = useState('') 

  const handleOnClick = () => {  

    if (url && title && userId && content) {

      const page = {
        id: uuidv4(),
        url: url,
        title: title,
        userId: userId,
        content: content,
      }
      addRows(page)
      setUrl('')
      setTitle('')
      setUserId('')
      setContent('')
    }
  }

  return (
    <div>
      <Consumer>
        {(context) => (
          <button onClick={context.changeTheme}>Изменить тему</button>
        )}
      </Consumer>
      <div className="form">
        <div className="field">
          <label htmlFor="url">URL</label>
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="userId">userId</label>
          <input type="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="content">Content</label>
          <textarea
            disabled={ title ? false : true }
            placeholder={ !title ? 'Заполните поле title' : 'Content' }
            name="content"
            cols="30"
            rows="10"
            value={ !title ? 'Заполните поле title' : content }
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="btn" onClick={handleOnClick}>
          Send
        </button>
      </div>
    </div>
  )
}

PageForm.propTypes = {
  addRows: PropTypes.func
}

export default PageForm

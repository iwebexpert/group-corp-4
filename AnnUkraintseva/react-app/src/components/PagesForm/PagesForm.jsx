import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/ThemeContexts'

export default function PagesForm({ onAddPages }) {
  const [pagesUrl, setPagesUrl] = useState('')
  const [pagesTitle, setPagesTitle] = useState('')
  const [pagesContent, setPagesContent] = useState('')
  const [pagesUserId, setPagesUserId] = useState(1)

  const handlePagesUrlChange = (event) => {
    setPagesUrl(event.target.value)
  }

  const handlePagesTitleChange = (event) => {
    setPagesTitle(event.target.value)
  }

  const handlePagesContentChange = (event) => {
    setPagesContent(event.target.value)
  }

  const handlePagesUserIdChange = (event) => {
    setPagesUserId(event.target.value)
  }

  const handleSubmit = () => {
    const data = {
      id: uuidv4(),
      url: pagesUrl,
      title: pagesTitle,
      content: pagesContent,
      userId: pagesUserId,
    }
    onAddPages(data)
  }

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={"form form-" + context.theme}>
          <div>context: {context.theme}</div>
          <div className='contentFlex'>
            <label htmlFor="pagesUrl">URL</label>
            <textarea className={"inputText inputText-"+context.theme}
              id="pagesUrl"
              value={pagesUrl}
              onChange={handlePagesUrlChange} >
            </textarea>
          </div>
          <div className='contentFlex'>
            <label htmlFor="pagesTitle">Заголовок</label>
            <textarea className={"inputText inputText-"+context.theme}
              id="pagesTitle"
              value={pagesTitle}
              onChange={handlePagesTitleChange} >
            </textarea>
          </div>
          <div className='contentFlex'>
          <label htmlFor="pagesContent">Контент</label>
            <textarea className={"inputText inputText-"+context.theme}
              id="pagesContent"
              value={pagesContent}
              onChange={handlePagesContentChange} >
            </textarea>
          </div>
          <div>
            <label htmlFor="pagesUserId">Пользователь</label>
            <input className={"inputText inputText-"+context.theme}
              type="number"
              min ="1"
              id="pagesUserId"
              value={pagesUserId}
              onChange={handlePagesUserIdChange}
            />
          </div>
          <div>
            <input className={"inputButton inputButton-" + context.theme} type="button" onClick={handleSubmit} value="Создать новую страницу" />
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  )
}

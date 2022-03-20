import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/ThemeContexts'
import PropTypes from 'prop-types'

export const dataSelectContent = ''

export function PagesForm({ onAddPages }) {
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


  const getPagesContent = () => {
    if (dataSelectContent != pagesTitle)
    {return true}
    else{return false}    
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
    setPagesUrl('')
    setPagesTitle('')
    setPagesContent('')
    setPagesUserId(1)
  }

  return (
    <ThemeContextConsumer>
      {(context) => (
        <>
          <div className={'fragmentForm fragmentForm-' + context.theme}>
            <div className={'form form-' + context.theme}>
              <h2 className="textTitle">Добавление страниц</h2>
              <div className="contentFlex">
                <label htmlFor="pagesUrl">URL</label>
                <textarea
                placeholder ='Введите url'
                  className={'inputText inputText-' + context.theme}
                  id="pagesUrl"
                  value={pagesUrl}
                  onChange={handlePagesUrlChange}
                ></textarea>
              </div>
              <div className="contentFlex">
                <label htmlFor="pagesTitle">Заголовок</label>
                <textarea
                placeholder ='Введите заголовок'
                  className={'inputText inputText-' + context.theme}
                  id="pagesTitle"
                  value={pagesTitle}
                  onChange={handlePagesTitleChange}
                ></textarea>
              </div>
              <div className="contentFlex">
                <label htmlFor="pagesContent">Контент</label>                
                <textarea
                placeholder ='Введите контент'
                  className={'inputText inputText-' + context.theme}
                  disabled ={!getPagesContent()}
                  id="pagesContent"
                  value={pagesContent}
                  onChange={handlePagesContentChange}
                ></textarea>
              </div>
              <div className="contentFlex">
                <label htmlFor="pagesUserId">Пользователь</label>
                <input
                  className={'inputText inputText-' + context.theme}
                  type="number"
                  min="1"
                  id="pagesUserId"
                  value={pagesUserId}
                  onChange={handlePagesUserIdChange}
                />
              </div>
              <div className="buttonAdd">
                <input
                  className={'inputButton inputButton-' + context.theme}
                  type="button"
                  onClick={handleSubmit}
                  value="Создать новую страницу"
                />
              </div>
            </div>
            <div>
              <hr />
            </div>
          </div>
        </>
      )}
    </ThemeContextConsumer>
  )
}

PagesForm.defaultProps={
  onAddPages:()=>{}
}

PagesForm.propTypes={
  onAddPages: PropTypes.func.isRequired,
}
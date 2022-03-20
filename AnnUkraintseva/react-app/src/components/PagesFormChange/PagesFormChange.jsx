import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/ThemeContexts'
import PropTypes from 'prop-types'

export const dataSelectContent = ''

export function PagesFormChange({ changesPages, editOnPagesObjectFunc, changeBack }) {
  const [pagesID, setPagesId] = useState('')
  const [pagesUrl, setPagesUrl] = useState('')
  const [pagesTitle, setPagesTitle] = useState('')
  const [pagesContent, setPagesContent] = useState('')
  const [pagesUserId, setPagesUserId] = useState(1)

  useEffect(() => {
    setPagesId(changesPages.id)
    setPagesUrl(changesPages.url)
    setPagesTitle(changesPages.title)
    setPagesContent(changesPages.content)
    setPagesUserId(changesPages.userId)
  }, [changesPages])

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
    const changeData = {
      id: pagesID,
      url: pagesUrl,
      title: pagesTitle,
      content: pagesContent,
      userId: pagesUserId,
    }
    editOnPagesObjectFunc(changeData)

    setPagesUrl('')
    setPagesTitle('')
    setPagesContent('')
    setPagesUserId(1)
  }

  const getPagesContent = () => {
    if (dataSelectContent != pagesTitle)
    {return true}
    else{return false}    
  }

  const getPagesContentValues=()=>{
    if (dataSelectContent != pagesTitle)
    {return pagesContent}
    else{return ''}
  }


  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={'fragmentForm fragmentForm-' + context.theme}>
          <div className={'form form-' + context.theme}>
            <h2 className="changeTitle">Редактирование</h2>
            <div className="contentFlex">
              <label htmlFor="pagesUrl">URL</label>
              <textarea
                className={'inputText inputText-' + context.theme}
                id="pagesUrl"
                value={pagesUrl}
                onChange={handlePagesUrlChange}
              ></textarea>
            </div>
            <div className="contentFlex">
              <label htmlFor="pagesTitle">Заголовок</label>
              <textarea
                className={'inputText inputText-' + context.theme}
                id="pagesTitle"
                value={pagesTitle}
                onChange={handlePagesTitleChange}
              ></textarea>
            </div>
            <div className="contentFlex">
              <label htmlFor="pagesContent">Контент</label>
              <textarea
                className={'inputText inputText-' + context.theme}
                disabled ={!getPagesContent()}
                id="pagesContent"
                value={getPagesContentValues()}
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
            <div className="buttons">
              <input
                className={'inputButton inputButton-' + context.theme}
                type="button"
                onClick={handleSubmit}
                value="Редактировать"
              />
              <input
                className={'inputButton inputButton-' + context.theme}
                type="button"
                onClick={()=>changeBack()}
                value="Вернуться назад"
              />
            </div>
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  )
}

PagesFormChange.defaultProps = {
  changesPages: {},
  editOnPagesObjectFunc: () => {},
}

PagesFormChange.propTypes = {
  changesPages: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    userId: PropTypes.number.isRequired,
  }),

  editOnPagesObjectFunc: PropTypes.func,
}

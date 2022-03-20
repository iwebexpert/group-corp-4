import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/theme-context/theme-context'
import TextArea from '../lib/form/form-fields/textarea'
import TextField from '../lib/form/form-fields/textfield'
import Button from '../ui/button/button'
import PropTypes from 'prop-types'
import './styles.scss'

const CreatePageForm = ({ onAddPage, item, textButton, onOpen }) => {
  const [pageUrl, setPageUrl] = useState(item?.url)
  const [pageTitle, setPageTitle] = useState(item?.title)
  const [pageContent, setPageContent] = useState(item?.content)
  const [pageUserId, setPageUserIdt] = useState(item?.userId)

  const handlePageUrlChange = (event) => {
    setPageUrl(event.target.value)
  }

  const handlePageTitleChange = (event) => {
    setPageTitle(event.target.value)
  }

  const handlePageContentChange = (event) => {
    setPageContent(event.target.value)
  }

  const handlePageUserIdChange = (event) => {
    setPageUserIdt(event.target.value)
  }

  const handleSubmit = () => {
    if (onOpen) {
      onOpen(false)
    }
    const data = {
      id: item?.id || uuidv4(),
      url: pageUrl,
      title: pageTitle,
      content: pageContent,
      userId: pageUserId,
    }

    onAddPage(data)
  }

  const handleClose = () => {
    onOpen(false)
  }

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={'form form__' + context.theme}>
          <div className="form__col">
            <div className="form__item">
              <TextField
                type="url"
                value={pageUrl}
                onChange={handlePageUrlChange}
                placeholder="URL"
              />
            </div>

            <div className="form__item">
              <TextField
                type="text"
                value={pageTitle}
                onChange={handlePageTitleChange}
                placeholder="Название"
              />
            </div>

            <div className="form__item">
              <TextArea
                type="text"
                value={pageContent}
                onChange={handlePageContentChange}
                placeholder="Контент"
                disabled={!Boolean(pageTitle)}
              />
            </div>

            <div className="form__item">
              <TextField
                type="text"
                value={pageUserId}
                onChange={handlePageUserIdChange}
                placeholder="ID пользователя"
              />
            </div>
          </div>

          <div className="form__actions">
            <Button type="button" onClick={handleSubmit} text={textButton} />

            {textButton != 'создать страницу' && (
              <Button type="button" onClick={handleClose} text="Закрыть" />
            )}
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  )
}

CreatePageForm.defaultProps = {
  onAddPage: () => {},
  item: {},
  textButton: 'создать страницу',
  onOpen: () => {},
}

CreatePageForm.propTypes = {
  onAddPage: PropTypes.func,
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any,
      url: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      userId: PropTypes.string,
    }),
  ),
  textButton: PropTypes.string,
  onOpen: PropTypes.func,
}

export default CreatePageForm

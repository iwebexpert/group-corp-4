import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import './styles.scss'
import { Button, TextField, useTheme } from '@mui/material'

const CreatePageForm = ({ onAddPage, item, textButton, onOpen }) => {
  const [pageUrl, setPageUrl] = useState(item?.url)
  const [pageTitle, setPageTitle] = useState(item?.title)
  const [pageContent, setPageContent] = useState(item?.content)
  const [pageUserId, setPageUserIdt] = useState(item?.userId)

  const theme = useTheme()

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
    <div className={'form form__' + theme.palette.mode}>
      <div className="form__col">
        <div className="form__item">
          <TextField
            fullWidth
            type="url"
            label="URL"
            defaultValue={pageUrl}
            onChange={handlePageUrlChange}
            color="primary"
            variant="outlined"
          />
        </div>

        <div className="form__item">
          <TextField
            fullWidth
            label="Название"
            defaultValue={pageTitle}
            onChange={handlePageTitleChange}
            color="primary"
          />
        </div>

        <div className="form__item">
          <TextField
            fullWidth
            label="Контент"
            defaultValue={pageContent}
            onChange={handlePageContentChange}
            disabled={!Boolean(pageTitle)}
            color="primary"
          />
        </div>

        <div className="form__item">
          <TextField
            fullWidth
            label="ID пользователя"
            defaultValue={pageUserId}
            onChange={handlePageUserIdChange}
            color="primary"
          />
        </div>
      </div>

      <div className="form__actions">
        <Button color="primary" type="button" onClick={handleSubmit}>
          {textButton}
        </Button>

        {textButton != 'создать страницу' && (
          <Button color="secondary" type="button" onClick={handleClose}>
            Закрыть
          </Button>
        )}
      </div>
    </div>
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
      id: PropTypes.any.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
    }),
  ),
  textButton: PropTypes.string,
  onOpen: PropTypes.func,
}

export default CreatePageForm

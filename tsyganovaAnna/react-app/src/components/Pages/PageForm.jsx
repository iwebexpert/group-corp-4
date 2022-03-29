import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '../Fields/Input.jsx'

export default function PageForm({ isOpen, close, page, onChangeData }) {
  const [url, setPageUrl] = useState(page ? page.url : '')
  const [title, setPageTitle] = useState(page ? page.title : '')
  const [content, setPaageContent] = useState(page ? page.content : '')

  const handlePageUrlChange = (event) => setPageUrl(event.target.value)
  const handlePageTitleChange = (event) => setPageTitle(event.target.value)
  const handlePageContentChange = (event) => setPaageContent(event.target.value)

  const pageData = {
    id: page.id ? page.id : uuidv4(),
    url: url,
    title: title,
    content: content,
    userId: page.userId ? page.userId : uuidv4(),
  }

  const handleSubmit = () => {
    setPageUrl('')
    setPageTitle('')
    setPaageContent('')
    onChangeData(pageData)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    p: 2,
  }

  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Input label="Url" value={url} onChange={handlePageUrlChange} />
        <Input label="Title" value={title} onChange={handlePageTitleChange} />
        <Input
          label="Content"
          value={content}
          rows={4}
          multiline
          disabled={!title}
          onChange={handlePageContentChange}
        />
        <Button onClick={handleSubmit} variant="outlined">
          Save
        </Button>
      </Box>
    </Modal>
  )
}
PageForm.defaultProps = {
  isOpen: false,
  close: () => {},
  page: {},
  onChangeData: () => {},
}

PageForm.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
  page: PropTypes.shape({
    id: PropTypes.number || PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
  }),
  onChangeData: PropTypes.func.isRequired,
}

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'

import './PageForm.sass'

export default function PageForm({ page, onChangeData }) {
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
    onChangeData(pageData)
  }

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={'form_style form_style_' + context.theme}>
          <div className="field">
            <label htmlFor="url">Url</label>
            <input type="string" id="url" value={url} onChange={handlePageUrlChange} />
          </div>
          <div className="field">
            <label htmlFor="title">Title</label>
            <input type="string" id="title" value={title} onChange={handlePageTitleChange} />
          </div>
          <div className="field">
            <label htmlFor="content">Content</label>
            <textarea
              type="string"
              id="content"
              value={content}
              disabled={!title}
              onChange={handlePageContentChange}
            />
          </div>
          <button onClick={handleSubmit}>Save</button>
        </div>
      )}
    </ThemeContextConsumer>
  )
}
PageForm.defaultProps = {
  page: {},
  onChangeData: () => {},
}

PageForm.propTypes = {
  page: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onChangeData: PropTypes.func.isRequired,
}

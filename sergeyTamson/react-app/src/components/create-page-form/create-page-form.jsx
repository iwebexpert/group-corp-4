import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ThemeContextConsumer } from '../../contexts/theme-context/theme-context'
import './styles.scss'

const CreatePageForm = ({ onAddPage, item, textButton = 'создать страницу', onOpen }) => {
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

  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={'form form-' + context.theme}>
          <div>
            <label htmlFor="pageUrl">URL</label>

            <input type="url" id="pageUrl" value={pageUrl} onChange={handlePageUrlChange} />
          </div>

          <div>
            <div>
              <label htmlFor="pageTitle">Название</label>

              <input type="url" id="pageTitle" value={pageTitle} onChange={handlePageTitleChange} />
            </div>
          </div>

          <div>
            <label htmlFor="pageContent">Контент</label>

            <textarea id="pageContent" value={pageContent} onChange={handlePageContentChange} />
          </div>

          <div>
            <label htmlFor="pageUserId">ID пользователя</label>

            <input
              type="text"
              id="pageUserId"
              value={pageUserId}
              onChange={handlePageUserIdChange}
            />
          </div>

          <div>
            <input type="button" onClick={handleSubmit} value={textButton} />
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  )
}

export default CreatePageForm

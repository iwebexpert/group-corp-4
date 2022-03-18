import React, { useState } from 'react'
import { ThemeContextConsumer } from '../../contexts/theme-context/theme-context'
import CreatePageForm from '../create-page-form/create-page-form'
import Modal from '../modal/modal.component'

const PageTable = ({ page, setPage, handleEditPage }) => {
  const [open, setOpen] = useState(false)
  const [dataObj, setDataObj] = useState(false)

  const onDeletePage = (id) => {
    const filteredItems = page.filter((item) => item.id !== id)
    setPage(filteredItems)
  }

  const onEditPage = (obj) => {
    setDataObj(obj)
    setOpen(true)
  }

  return (
    <>
      <ThemeContextConsumer>
        {(context) => <button onClick={context.toggleTheme}>Сменить тему ({context.theme})</button>}
      </ThemeContextConsumer>

      <h1>Список всех страниц</h1>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Название</th>
            <th>Контент</th>
            <th>ID пользователя</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {page.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.url}</td>
              <td>{obj.title}</td>
              <td>{obj.content}</td>
              <td>{obj.userId}</td>
              <td onClick={() => onDeletePage(obj.id)}>Удалить</td>
              <td onClick={() => onEditPage(obj)}>Редактировать</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={open} setOpen={setOpen}>
        <CreatePageForm
          item={dataObj}
          onAddPage={handleEditPage}
          textButton="изменить данные страницы"
          onOpen={setOpen}
        />
      </Modal>
    </>
  )
}

export default PageTable

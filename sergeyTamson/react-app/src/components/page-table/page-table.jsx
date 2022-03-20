import React, { useState } from 'react'
import CreatePageForm from '../create-page-form/create-page-form'
import Modal from '../modal/modal.jsx'
import './styles.scss'

const PageTable = ({ page, setPage, handleEditPage }) => {
  const [open, setOpen] = useState(false)
  const [dataObj, setDataObj] = useState({})

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
      <h1>Список всех страниц</h1>

      <table className="table">
        <thead>
          <tr className="head">
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
            <tr key={obj.id} className="row">
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

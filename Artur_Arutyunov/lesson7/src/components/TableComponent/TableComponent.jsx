import React from 'react'
import PropTypes from 'prop-types'

export default function TableComponent({ pages, removePage, changePage }) {
  return (
    <>
      <div style={{ border: '1px solid red' }}>
        <h4>Список страниц</h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Путь</th>
              <th>Заголовок</th>
              <th>Контент</th>
              <th>Id</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {pages &&
              pages.map((page, index) => (
                <tr key={page.id}>
                  <td>{index + 1}</td>
                  <td>{page.url}</td>
                  <td>{page.title}</td>
                  <td>{page.content}</td>
                  <td>{page.userId}</td>
                  <td onClick={() => removePage(page.id)}>Удалить</td>
                  <td onClick={() => changePage(page.id)}>Изменить</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

TableComponent.propTypes = {
  pages: PropTypes.array,
  removePage: PropTypes.func,
  changePage: PropTypes.func,
}

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContextConsumer } from '../Theme/ThemeContext'
import './TableComponent.css'

export default function TableComponent({ pages, removePage, changePage }) {
  return (
    <>
      <ThemeContextConsumer>
        {(context) => (
          <div className={'style-' + context.theme}>
            <h4>Список страниц</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Путь</th>
                  <th>Заголовок</th>
                  <th>Контент</th>
                  <th>Id</th>
                  <th style={{ width: '200px' }}>&nbsp;</th>
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
                      <td style={{ border: 'none' }}>
                        <span className="button" onClick={() => removePage(page.id)}>
                          Удалить
                        </span>
                        <span className="button" onClick={() => changePage(page.id)}>
                          Изменить
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </ThemeContextConsumer>
    </>
  )
}

TableComponent.propTypes = {
  pages: PropTypes.array,
  removePage: PropTypes.func,
  changePage: PropTypes.func,
}

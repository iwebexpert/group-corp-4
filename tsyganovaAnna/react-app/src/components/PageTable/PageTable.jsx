import React from 'react'
import { ThemeContextConsumer } from '../../contexts/ThemeContext'
import PropTypes from 'prop-types'

import './PageTable.sass'

export default function PageTable({ pages, onEditPage, onDeletePage }) {
  return (
    <>
      <ThemeContextConsumer>
        {(context) => <button onClick={context.toggleTheme}>{context.theme}</button>}
      </ThemeContextConsumer>
      <table>
        <caption>List of pages</caption>
        <thead>
          <tr>
            <th>№</th>
            <th>Url</th>
            <th>Title</th>
            <th>Content</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((tabelItem, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tabelItem.url}</td>
              <td>{tabelItem.title}</td>
              <td>{tabelItem.content}</td>
              <td>
                <button onClick={() => onEditPage(tabelItem.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => onDeletePage(tabelItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
PageTable.defaultProps = {
  pages: [],
  onEditPage: () => {},
  onDeletePage: () => {},
}

PageTable.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string.isRequired,
    }),
  ),
  onEditPage: PropTypes.func.isRequired,
  onDeletePage: PropTypes.func.isRequired,
}

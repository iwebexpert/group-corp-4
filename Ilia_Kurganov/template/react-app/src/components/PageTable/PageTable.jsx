import React from 'react'
import './PageTable.scss'
import propTypes from 'prop-types'
import { Consumer } from '../../context/ThemeContext'

const PageTable = ({ tableRows, delitePage }) => {
  return (
    <>
      <Consumer>
        {(context) => (
          <table className={`table ${ context.theme === 'light' ? 'light' : 'dark'}`}>
            <caption>Table of Pages</caption>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">URL</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">UserId</th>
                <th scope="col"></th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((page, i) => {
                return (
                  <tr key={page.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{page.url}</td>
                    <td>{page.title}</td>
                    <td>{page.content}</td>
                    <td>{page.userId}</td>
                    <td>
                      <button onClick={() => delitePage(page.id)}>Delite</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Consumer>
    </>
  )
}

PageTable.propTypes = {
  tableRows: propTypes.array,
  delitePage: propTypes.func,
}

export default PageTable

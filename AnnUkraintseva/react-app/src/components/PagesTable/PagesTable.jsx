import React from 'react'
import { ThemeContextConsumer } from '../../contexts/ThemeContexts'
import PropTypes from 'prop-types'

export function PagesTable({
  pages,
  onDeletePages,
  getElemForChange,
}) {
  return (
    <>
    <ThemeContextConsumer>
      {(context)=>(
        <div className={"tableForm tableForm-"+context.theme}>
          <h1>Заявки на оборудование</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>URL</th>
            <th>Заголовок</th>
            <th>Контент</th>
            <th>Пользователь</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((obj, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{obj.url}</td>
              <td>{obj.title}</td>
              <td>{obj.content}</td>
              <td>{obj.userId}</td>
              <td>
                <input className={'buttonDelete buttonDelete-'+context.theme} type="button" onClick={() => onDeletePages(obj.id)} value="Удалить" />
              </td>
              <td>
                <input
                className={'buttonUpdate buttonUpdate-'+context.theme}
                  type="button"
                  onClick={() => getElemForChange(obj)}
                  value="Редактировать"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
        </div>
        
      )}
    </ThemeContextConsumer>      
    </>
  )
}

PagesTable.defaultProps={
  pages:[],
  onDeletePages: ()=>{},
  getElemForChange: ()=>{},
}


PagesTable.propTypes={
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    userId: PropTypes.number.isRequired,
  })),
  onDeletePages: PropTypes.func,
  getElemForChange:PropTypes.func,
}

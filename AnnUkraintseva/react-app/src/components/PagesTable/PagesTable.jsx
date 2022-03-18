import React from 'react'
import { ThemeContextConsumer } from '../../contexts/ThemeContexts'

export default function PagesTable({
  pages,
  onDeletePages,
  onChangePages,
}) {
  return (
    <>
    <ThemeContextConsumer>
      {(context)=>(
        <div className={"table table-"+context.theme}>
          <button className={"themeButton themeButton-"+ context.theme} onClick={context.toggleTheme}>Переключить тему ({context.theme})</button>
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
                <input type="button" onClick={() => onDeletePages(obj.id)} value="Удалить" />
              </td>
              <td>
                <input
                  type="button"
                  onClick={() => onChangePages(obj.id)}
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

import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../../context/Context'

export default function ShowListPages({addPages, deleteOnPagesObject, getOnPagesObject}) {
     //Context data
    const {changeWindowEdit} = useContext(Context);
  return (
    <div>
        <h2>Список созданных страниц</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>№ п/п</th>
                    <th>Адрес страницы</th>
                    <th>Название</th>
                    <th>Содержимое</th>
                    <th>Id пользователя</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                {addPages.length >= 1 ? addPages.map((obj, index) => (
                    <tr key={obj.id}>
                    <td>{index + 1}</td>
                    <td>{obj.url}</td>
                    <td>{obj.title}</td>
                    <td className="td-content-small">{obj.content}</td>
                    <td>{obj.userId}</td>
                    <td><button className="button__show" onClick={() => {
                        getOnPagesObject(obj);
                        changeWindowEdit()
                    }}>Редактировать</button></td>
                    <td><button className="button__show button__show--delete" 
                    onClick={() => deleteOnPagesObject(obj.id)}>Удалить</button></td>
                </tr>
                )) : <tr><td colSpan="7">Страницы не созданы</td></tr>}
            </tbody>
        </table>
    </div>
  )
}
//Props types
ShowListPages.propTypes = {
  addPages: PropTypes.array,
  deleteOnPagesObject: PropTypes.func,
  getOnPagesObject: PropTypes.func,
}

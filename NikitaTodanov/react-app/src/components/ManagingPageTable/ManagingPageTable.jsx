import React from "react";
import PropTypes from "prop-types";
// import { ThemeContextConsumer } from "../../contexts/ThemeContext";

import EditingForm from "../EditingForm/EditingFrom";
import useLocalStorage from '../../hooks/useLocalStorage'
function ManagingPageTable({ createTable, onDeleteTable }) {
  const [,setValue]=useLocalStorage()
  return (
    <>
      {/* <ThemeContextConsumer>
        {(context) => (
          <button onClick={context.toggleTheme}>
            Переключить тему ({context.theme})
          </button>
        )}
      </ThemeContextConsumer> */}
      <h1 className="tabel__title">Данные о страницах</h1>
      <div className="tabel__container__name" >
        <div className="tabel__id" >Id</div>
        <div className="tabel__url">URL</div>
        <div className="tabel__name">Name Page</div>
        <div className="tabel__content">Content</div>
        <div className="tabel__user">User id</div>
      </div>

      {createTable.map((obj, index) => (
        <fieldset className='form__fildset' key={index}>
               <div className="tabel__container" >
          <div className="tabel__id">{index + 1}</div>
          <div className="tabel__url">{obj.url}</div>
          <div className="tabel__name"> {obj.title}</div>
          <div className="tabel__content">{obj.content}</div>
          <div className="tabel__user">{obj.userId}</div>
          <button className="tabel__btn" onClick={() => onDeleteTable(obj.id)}>
            Удалить
          </button>
          <EditingForm obj={obj} />
        </div>
        </fieldset>
     
      ))}
    </>
  );
}
ManagingPageTable.defaultProps = {
  createTable: [],
  onDeleteTable: () => {},
};
ManagingPageTable.propTypes = {
  createTable: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userId: PropTypes.any,
    })
  ),
  onDeleteTable: PropTypes.func.isRequired,
};

export default ManagingPageTable;

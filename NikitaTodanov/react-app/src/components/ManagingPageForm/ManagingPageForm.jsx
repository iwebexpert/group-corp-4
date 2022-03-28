import propTypes from "prop-types";
import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";



function ManagingPageForm({ onAddCreateTable }) {

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("Some Content...");
  const [userId, setUserId] = useState(1);
  const [validateDisabled, setvalidateDisable] = useState(true);


  const handleCreateUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleCreateTitle = (e) => {
    if (!e || '') {
      setvalidateDisable(true)
    }
    setTitle(e.target.value);
    setvalidateDisable(false);
  };
  const handleCreateContent = (e) => {
    setContent(e.target.value);
  };

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };
  const handelClear =() =>{
    setUrl('')
    setTitle('')
    setContent('Some Content...')
    setvalidateDisable(true)
  }
  //Submit data
  const handleSubmist = (e) => {
    const data = {
      id: uuidv4(),
      url,
      title,
      content,
      userId
    };
    onAddCreateTable(data);
    handelClear()
  };

  return (
    <>
      
        <div>
          <div className={`article__form `} >
            <></>
            <label htmlFor="managingPage">Создать страницу</label>
          </div>
          <div>
            <fieldset className='article__form__fildset'>
            <label htmlFor="createUrl">Наименование URL</label>
            <input  className='article__form__input' type="text" onChange={handleCreateUrl} value={url} />
            </fieldset>
           
          </div>
          <div>
            <fieldset className='article__form__fildset'>
            <label htmlFor="createTitle">Название Страницы</label>
            <input
              className='article__form__input'
              type="text"
              onChange={handleCreateTitle}
              value={title}
            />
            </fieldset>
        
          </div>
          <div>
            <fieldset className='article__form__fildset'>
            <label htmlFor="createTitle">Контент Страницы</label>
            <textarea
             className='article__form__input'
              type="text"
              onChange={handleCreateContent}
              value={content}
              disabled={validateDisabled}
            />
            </fieldset>
         
          </div>
          <div>
            <fieldset  className='article__form__fildset'>
            <label htmlFor="createTitle">Введите ID Пользователя</label>
            <input type="number" onChange={handleUserId} value={userId} />
            </fieldset>
          </div>
          <div>
            <input
              className='article__publish'      
              type="button"
              onClick={handleSubmist}
              value="Создать новую страницу"
              
            />
          </div>
        </div>
      
    </>
  );
}
ManagingPageForm.defaultProps = {
  onAddCreateTable: () => {},
};
ManagingPageForm.propTypes = {
  onAddCreateTable: propTypes.func.isRequired,
};
export default ManagingPageForm;

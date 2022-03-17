import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContextConsumer } from "../../contexts/ThemeContext";


function ManagingPageForm({ onAddCreateTable }) {
  const [createUrl, setCreateUrl] = useState("");
  const [createTitlePage, setCreateTitlePage] = useState("");
  const [createContentPage, setCreateContentPage] = useState("Some Content...");
  const [userName, setUserName] = useState(1);

  const handleCreateUrl = (e) => {
    console.log(e.target.value);
    setCreateUrl(e.target.value);
  };

  const handleCreateTitle = (e) => {
    setCreateTitlePage(e.target.value);
  };
  const handleCreateContent = (e) => {
    setCreateContentPage(e.target.value);
  };

  const handleUserId = (e) => {
    setUserName(e.target.value);
  };
  //Submit data
  const handleSubmist = (e) => {
    const data = {
      id: uuidv4(),
      url: createUrl,
      title: createTitlePage,
      content: createContentPage,
      UserId: userName,
    };
    onAddCreateTable(data);
  };

  return (
    <ThemeContextConsumer>
      {(context)=> (
        <div>
        <div className="form">
          <div>context:{context.theme}</div>
          <label htmlFor="managingPage">Создать страницу</label>
        </div>
        <div>
          <label htmlFor="createUrl">Наименование URL</label>
          <input type="text" onChange={handleCreateUrl} value={createUrl} />
        </div>
        <div>
          <label htmlFor="createTitle">Название Страницы</label>
          <input
            type="text"
            onChange={handleCreateTitle}
            value={createTitlePage}
          />
        </div>
        <div>
          <label htmlFor="createTitle">Контент Страницы</label>
          <textarea
            type="text"
            onChange={handleCreateContent}
            value={createContentPage}
          />
        </div>
        <div>
          <label htmlFor="createTitle">Введите ID Пользователя</label>
          <input type="number" onChange={handleUserId} value={userName} />
        </div>
        <div>
          <input
            type="button"
            onClick={handleSubmist}
            value="Создать новую страницу"
          />
        </div>
      </div>
      )}
    </ThemeContextConsumer>
    
  );
}

export default ManagingPageForm;

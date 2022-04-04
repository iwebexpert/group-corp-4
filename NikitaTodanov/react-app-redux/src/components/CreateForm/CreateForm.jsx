import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function CreateForm({ dataInitial, onAdd, onSave, onReset, roles }) {
  console.log(roles[0] === "user");
  const [iD, setId] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    if (dataInitial) {
      setId(dataInitial.id);
      setUrl(dataInitial.url);
      setTitle(dataInitial.title);
      setContent(dataInitial.content);
      setUserId(dataInitial.userId);
    } else {
      setId(null);
      setUrl("");
      setTitle("");
      setContent("");
      setUserId(1);
    }
  }, [dataInitial]);

  const handleUrlName = (e) => {
    setUrl(e.target.value);
  };
  const handleTitleName = (e) => {
    setTitle(e.target.value);
  };
  const handleConten = (e) => {
    setContent(e.target.value);
  };
  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {
    if (roles[0] === "user") {
      return;
    }
    const data = {
      id: iD ?? uuidv4(),
      url: url,
      title,
      content,
      userId,
    };
    console.log(data);

    if (iD) {
      onSave(data);
    } else {
      onAdd(data);
    }
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <Typography component="h2" color="primary">
          Создать новую страницу
        </Typography>

        {iD && (
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="equipment-id"
            type="text"
            label="ID"
            value={iD}
            disabled
          />
        )}

        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-amount"
          type="text"
          label="Адрес URL"
          value={url}
          onChange={handleUrlName}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-amount"
          type="text"
          label="Наименование Страницы"
          value={title}
          onChange={handleTitleName}
        />

        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-comment"
          label="Контент страницы"
          type="text"
          multiline
          rows={6}
          value={content}
          onChange={handleConten}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-amount"
          type="number"
          label="ID Пользователя"
          value={userId}
          onChange={handleUserId}
        />

        {iD ? (
          <>
            <Button sx={{ m: 1 }} variant="outlined" onClick={onReset}>
              Отмена
            </Button>
            <Button sx={{ m: 1 }} variant="outlined" onClick={handleSubmit}>
              Сохранить
            </Button>
          </>
        ) : (
          <Button
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            onClick={handleSubmit}
          >
            Создать новую страницу
          </Button>
        )}
      </Box>
    </div>
  );
}

CreateForm.defaultProps = {
  onAddEquipment: () => {},
};

CreateForm.propTypes = {
  onAddEquipment: PropTypes.func.isRequired,
};

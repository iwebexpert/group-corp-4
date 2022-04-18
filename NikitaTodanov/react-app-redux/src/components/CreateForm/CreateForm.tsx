import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PagePayload } from "../../actions/createpeges"
import { SelectChangeEvent } from "@mui/material";

type CreateFormProps = {
  dataInitial: PagePayload | null,
  onAdd: (data: PagePayload) => void
  onSave: (data: PagePayload) => void
  onReset: () => void
}


export function CreateForm({
  dataInitial,
  onAdd,
  onSave,
  onReset,

}: CreateFormProps) {

  const [iD, setId] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>('1');

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
      setUserId('1');
    }
  }, [dataInitial]);

  const handleUrlName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  const handleTitleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleConten = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleUserId = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {



    let data: PagePayload = {
      id: iD ?? uuidv4(),
      url: url,
      title: title,
      content: content,
      userId: userId,
    };

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

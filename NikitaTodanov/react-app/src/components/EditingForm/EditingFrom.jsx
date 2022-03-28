import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from '@mui/material/FormControl'
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function EditingForm({ obj }) {

  const [open, setOpen] = useState(false);
  const [url,setUrl]=useState('')
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [userId,setUserId]=useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };
  const handleSubmit = (...obj) => {
    console.log(obj)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Изменить
      </Button>
      <FormControl onSubmit={handleSubmit}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Редактирование Данных</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="Введите URl"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={obj.url}
            onChange={(e)=>setUrl(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Наименование"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={obj.title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="Контент"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={obj.content}
            onChange={(e)=>setContent(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Пользователь"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={obj.userId}
            onChange={(e)=>setUserId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button type="submit" onClick={handleClose}>Сохранить</Button>
        </DialogActions>
      </Dialog>
      </FormControl>
     
    </>
  );
}

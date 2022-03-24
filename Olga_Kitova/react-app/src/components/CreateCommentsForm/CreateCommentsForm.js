import React, { useState } from 'react'
import {Box, Typography, Button} from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import CreateFormBase from '../CreateFormBase/CreateFormBase'

const CustomTypography = styled(Typography)`
font-size: 1.3rem;
color: #f44336;
text-align: center;`

export default function CreateCommentsForm() {
  const [addPageIdComments, setAddPageIdComments] = useState(1);
  const [addUserIdComments, setAddUserIdComments] = useState(1);
  const [addContentComments, setAddContentComments] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch(name) {
      case 'addPageIdComments': setAddPageIdComments(value);
      break;
      case 'addUserIdComments': setAddUserIdComments(value);
      break;
      case 'addContentComments': setAddContentComments(value);
      break;
      default: 'Нет данных';
      break;
    }
  }
  const handleOnSubmit = () => {
    const data = {
      id: uuidv4(),
      pageId: addPageIdComments,
      userId: addUserIdComments,
      content: addContentComments,
  }
    console.log(data)
    //Clear form
    setAddPageIdComments(1);
    setAddUserIdComments(1);
    setAddContentComments('');
  }
  return (
    <>
      <CustomTypography>Добавить комментарий</CustomTypography>
      <CreateFormBase arrayField={[
          {label:"ID страницы", name:"addPageIdComments", type:"number", value:addPageIdComments, onChange:handleChange},
          {label:"ID пользователя", name:"addUserIdComments", type:"number", value:addUserIdComments,onChange:handleChange},
          {label:"Написать комментарий", multiline:true, name:"addContentComments", minRows:'9.3', value:addContentComments, onChange:handleChange}]}/>
      <Box sx={{'display':'flex','alignItems':'center','width': '100%', 'flex': '1'}}>
      <Button sx={{ 'width': '100%'}} variant="contained" onClick={handleOnSubmit}>Добавить комментарий</Button>
      </Box>
    </>
  )
}

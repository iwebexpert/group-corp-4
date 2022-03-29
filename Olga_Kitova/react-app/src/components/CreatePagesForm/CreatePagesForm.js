import React, {useState} from 'react'
import {Box, Typography, Button} from '@mui/material'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import CreateFormBase from '../CreateFormBase/CreateFormBase'

const CustomBox = styled(Box)`
display: flex;
flex-direction: column;
padding: .7rem;
`
const CustomTypography = styled(Typography)`
font-size: 1.3rem;
color: #f44336`;

export default function CreatePagesForm({addOnPagesObject}) {
    const [addUrl, setAddUrl] = useState('');
    const [addTitle, setAddTitle] = useState('');
    const [addContent, setAddContent] = useState('');
    const [addUserId, setAddUserId] = useState(1);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch(name) {
          case 'addUrl': setAddUrl(value);
          break;
          case 'addTitle': setAddTitle(value);
          break;
          case 'addContent': setAddContent(value);
          break;
          case 'addUserId': setAddUserId(+value);
          default: 'Нет данных';
          break;
        }
      }
    const handleOnSubmit = () => {
        //Validate data
        if(!addUrl || !addTitle || !addContent) {
            alert('Не заполнены обязательные поля');
            return;
        }
        const data = {
            id: uuidv4(),
            url: addUrl,
            title: addTitle,
            content: addContent,
            userId: addUserId,
        }
        addOnPagesObject(data);
        //Clear form
        setAddUrl('');
        setAddTitle('');
        setAddTitle('');
        setAddContent('');
        setAddUserId(1);
    }
  return (
    <>
  <CustomTypography>Добавить страницу</CustomTypography>
  <CreateFormBase arrayField={[
      {label:"URL страницы", name:"addUrl", onChange:handleChange, value:addUrl},
      {label:"Название страницы", name:"addTitle", onChange:handleChange, value:addTitle},
      {label:"Содержимое страницы", multiline:true,name:"addContent",onChange:handleChange,
      value:addContent,minRows:"6",disabled:addTitle.length < 1},
      {label:"Идентификатор пользователя",name:"addUserId", type:"number",onChange:handleChange,
       value:addUserId}
  ]}/>
  <CustomBox sx={{'display':'flex','alignItems':'center','width': '100%'}}>
      <Button sx={{ 'width': '100%'}} variant="contained" onClick={handleOnSubmit}>Добавить страницу</Button>
  </CustomBox>
</>
  )
  
}
//Props types
CreatePagesForm.defaultProps = {
    addOnPagesObject: () => {},
  }

CreatePagesForm.propTypes = {
    addOnPagesObject: PropTypes.func.isRequired
}

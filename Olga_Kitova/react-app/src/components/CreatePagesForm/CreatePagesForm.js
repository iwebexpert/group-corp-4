import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Box, Typography, Button} from '@mui/material'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import CreateFormBase from '../CreateFormBase/CreateFormBase'
import { addPagesFetch } from 'actions/actionsPages'

const CustomBox = styled(Box)`
display: flex;
flex-direction: column;
padding: .7rem;
`
const CustomTypography = styled(Typography)`
font-size: 1.3rem;
color: #f44336`;

const CustomButton = styled(Button)`
background-color: rgb(128 128 128);
&:hover {
  background-color: rgb(128 128 128);
}`;

export default function CreatePagesForm({ userId, role }) {
    const dispatch = useDispatch()
    const [addUrl, setAddUrl] = useState('')
    const [addTitle, setAddTitle] = useState('')
    const [addContent, setAddContent] = useState('')
    
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        switch(name) {
          case 'addUrl': setAddUrl(value);
          break;
          case 'addTitle': setAddTitle(value);
          break;
          case 'addContent': setAddContent(value);
          break;
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
            url: addUrl,
            title: addTitle,
            content: addContent,
            userId: userId,
        }
        dispatch(addPagesFetch(data))
        //Clear form
        setAddUrl('')
        setAddTitle('')
        setAddTitle('')
        setAddContent('')
    }

    return (
      <>
    <CustomTypography>Добавить страницу</CustomTypography>
    <CreateFormBase arrayField={[
        {label:"URL страницы", name:"addUrl", onChange:handleChange, value:addUrl},
        {label:"Название страницы", name:"addTitle", onChange:handleChange, value:addTitle},
        {label:"Содержимое страницы", multiline:true,name:"addContent",onChange:handleChange,
        value:addContent,minRows:"6",disabled:addTitle.length < 1}
    ]}/>
    <CustomBox sx={{'display':'flex','alignItems':'center','width': '100%'}}>
      {role === "user" ?
      <CustomButton
      sx={{ 'width': '100%' }}
      variant="contained" 
      onClick={handleOnSubmit}>Добавить страницу</CustomButton>
      :
      <Button sx={{ 'width': '100%' }}
      variant="contained" 
      onClick={handleOnSubmit}>Добавить страницу</Button>
      }
    </CustomBox>
  </>
    )
  
}
//Props types
CreatePagesForm.defaultProps = {
  userId: PropTypes.number,
  role: ""
}
CreatePagesForm.propTypes = {
userId: PropTypes.number.isRequired,
role: PropTypes.string.isRequired
}

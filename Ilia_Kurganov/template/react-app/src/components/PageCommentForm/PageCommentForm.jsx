import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FormInputText from './FormInputText'
import { useDispatch } from 'react-redux'
import { sendComments } from '../../actions/actionsComments'
import { authService } from './../../services/auth/authService'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { setParams } from '../../helpers/localStorageHelper'
import { getParams } from '../../helpers/localStorageHelper'

yup.setLocale({
  mixed: {
    default: 'Поле заполнено неправильно',
    required: 'Поле обезательно для заполнения',
  },
  string: {
    min: 'Минимальное значения поля должно быть больше ${min}',
  },
})

const schema = yup
  .object()
  .shape({
    comment: yup.string().min(0).required(),
  })
  .required()

function PageCommentForm({ pageId }) {
  const [isValid, setIsValid] = useState(false)
  const dispatch = useDispatch()
  const userId = authService.currentUserValue
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onBlurSaveLocalStorage = (event) => {
    const name = event.target.name
    const value = event.target.value
    updateLocalStaorage(name, value)
    console.log('onBlur', name, value)
  }

  const updateLocalStaorage = (name, value) => {
    if (name) {
      setParams('comment.form', name, value)
    }
  }

  const getDefaultInputValue = (name) => {
    let value = ''
    if (name) {
      value = getParams('filial.form', '', name)
      // Старый код
      // const item = localStorage.getItem('comment.form')
      // let data = {}
      // if (item !== null) {
      //   data = JSON.parse(item)
      //   if (data[name]) {
      //     value = data[name]
      //   }
      // }
    }
    return value
  }

  const onSubmit = (data) => {
    const comment = {
      pageId: pageId,
      userId: userId.id,
      content: data.comment,
    }
    dispatch(sendComments(comment))

    setIsValid(true)
  }

  return (
    <Box
      component="form"
      validate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography>Оставить комментарии</Typography>
      <FormInputText
        control={control}
        name="comment"
        label="Комментарий"
        onBlurCustom={onBlurSaveLocalStorage}
        defaultValue={getDefaultInputValue('comment')}
      />
      <Button type="submit" variant="contained">
        Отправить
      </Button>
    </Box>
  )
}

export default PageCommentForm

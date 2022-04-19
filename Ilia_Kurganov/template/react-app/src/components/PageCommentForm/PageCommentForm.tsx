import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FormInputText from './FormInputText'
import { useDispatch } from 'react-redux'
import { sendCommentThunk } from '../../actions/actionsComments'
import { authService } from '../../services/auth/authService'
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

type PageCommentFormProps = {
  pageId: string
}

function PageCommentForm({ pageId }: PageCommentFormProps) {
  const dispatch = useDispatch()
  const userId = authService.currentUserValue

  useEffect(() => {
    return () => {
      setParams('comment.form', pageId, '')
    }
  }, [])

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

  const onBlurSaveLocalStorage = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    const name = event.target.name
    const value = event.target.value
    updateLocalStaorage(name, value)
  }

  const updateLocalStaorage = (name: string, value: string) => {
    if (pageId) {
      setParams('comment.form', pageId, value)
    }
  }

  const getDefaultInputValue = (name: string) => {
    let value = ''
    if (name) {
      value = getParams('comment.form', '', pageId)
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

  const onSubmit = (data: any) => {
    const comment = {
      pageId: pageId,
      userId: +(userId.id),
      content: data.comment,
    }
    dispatch(sendCommentThunk(comment))
    setValue('comment', '')
  }

  return (
    <Box
      component="form"
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

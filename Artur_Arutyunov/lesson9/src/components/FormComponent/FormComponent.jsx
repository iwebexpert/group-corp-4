import React from 'react'
import Field from '../Field'
import { Button, Grid, Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function FormComponent({ savePage, fields, setFields }) {
  const onSubmitPages = () => {
    savePage(fields)
    setFields()
  }

  const handleButtonState = () => {
    if (fields && fields.url && fields.title && fields.content && fields.userId) {
      return false
    }
    if (!fields || !fields.url || !fields.title || !fields.content || !fields.userId) {
      return true
    }
  }

  return (
    <Grid item xs={12} md={8} lg={9} sx={{ margin: 'auto' }}>
      <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom component="div">
          Добавить страницу
        </Typography>
        <Field
          label="Добавить путь"
          type="text"
          keyObject={'url'}
          fields={fields}
          setFields={setFields}
        />
        <Field
          label="Добавить заголовок"
          type="text"
          keyObject={'title'}
          fields={fields}
          setFields={setFields}
        />
        <Field
          label="Добавить контент"
          type="textarea"
          keyObject={'textarea'}
          fields={fields}
          setFields={setFields}
          disabledField={fields?.title ? false : true}
        />
        <Field
          label="Добавить Id пользователя"
          type="number"
          keyObject={'userId'}
          fields={fields}
          setFields={setFields}
        />
        <div
          style={{
            width: '100%',
            height: '30px',
            textAlign: 'right',
          }}
        >
          <Button disabled={handleButtonState()} onClick={onSubmitPages} variant="contained">
            Сохранить
          </Button>
        </div>
      </Paper>
    </Grid>
  )
}

FormComponent.propTypes = {
  savePage: PropTypes.func,
  fields: PropTypes.any,
  setFields: PropTypes.func,
}

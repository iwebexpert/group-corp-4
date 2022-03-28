import React from 'react'
import Field from '../Field'
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
    <>
      <div className="wrapperForm">
        <h4 className="headerForm">Добавить страницу</h4>
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
          <input
            type="button"
            value="Сохранить"
            disabled={handleButtonState()}
            onClick={onSubmitPages}
          />
        </div>
      </div>
    </>
  )
}

FormComponent.propTypes = {
  savePage: PropTypes.func,
  fields: PropTypes.any,
  setFields: PropTypes.func,
}

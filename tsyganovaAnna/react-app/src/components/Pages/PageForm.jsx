// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Formik, Form, Field } from 'formik'
// import * as yup from 'yup'
// import { Modal, Box, Typography, Button } from '@mui/material'

// import Input from '../Fields/Input'
// import { authService } from '../../services/auth/authService'

// export default function PageForm({ isOpen, close, page, onChangeData }) {
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 500,
//     bgcolor: 'background.paper',
//     p: 2,
//   }

//   const validationSchema = yup.object({
//     url: yup.string().required('Url is required'),
//     title: yup.string().required('Title is required'),
//     content: yup.string(),
//   })

//   const fieldGroup = [
//     {
//       label: 'Url',
//       name: 'url',
//       required: true,
//     },
//     {
//       label: 'Title',
//       name: 'title',
//       required: true,
//     },
//   ]
//   const handleSubmit = (value) => {
//     const pageData = {
//       url: value.url,
//       title: value.title,
//       content: value.content,
//       userId: page.userId ? page.userId : authService.currentUser.id,
//     }
//     if (page) pageData.id = page.id

//     // setUrl('')
//     // setTitle('')
//     // setContent('')
//     // onChangeData(pageData)
//   }
//   return (
//     <Modal open={isOpen} onClose={close}>
//       <Box sx={style}>
//         <Typography variant="h6" component="h6" sx={{ color: 'gray' }}>
//           {JSON.stringify(page) === '{}' ? 'Create page' : 'Edit page'}
//         </Typography>
//         <Formik
//           initialValues={{
//             url: page ? page.url : '',
//             title: page ? page.title : '',
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values, errors) => {
//             console.log('errors: ', errors)
//             handleSubmit(values)
//           }}
//         >
//           {({ values, touched, errors, setFieldValue }) => (
//             <Form>
//               {console.log('errors: ', errors)}
//               {console.log('touched: ', touched)}
//               {/* {console.log('values: ', values)} */}
//               {fieldGroup.map((page) => (
//                 <>
//                   {console.log('page: ', page)}
//                   {console.log('errors[page.name]: ', errors[page.name])}

//                   <Input
//                     key={page.label}
//                     label={page.label}
//                     name={page.name}
//                     required={page.required}
//                     value={values[page.name]}
//                     error={errors[page.name]}
//                     helperText={errors[page.name]}
//                     onChange={(event) => setFieldValue(page.name, event.target.value)}
//                   />
//                 </>
//               ))}
//               <Button type="submit" variant="outlined" sx={{ mt: 2, mr: 2 }}>
//                 Save
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Modal>
//   )
// }
// PageForm.defaultProps = {
//   isOpen: false,
//   close: () => {},
//   page: {},
//   onChangeData: () => {},
// }

// PageForm.propTypes = {
//   isOpen: PropTypes.bool,
//   close: PropTypes.func.isRequired,
//   page: PropTypes.shape({
//     id: PropTypes.number || PropTypes.string,
//     url: PropTypes.string,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     userId: PropTypes.number,
//   }),
//   onChangeData: PropTypes.func.isRequired,
// }
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Box, Typography, Button } from '@mui/material'

import Input from '../Fields/Input'
import { authService } from '../../services/auth/authService'

export default function PageForm({ isOpen, close, page, onChangeData }) {
  const [url, setUrl] = useState(page ? page.url : '')
  const [title, setTitle] = useState(page ? page.title : '')
  const [content, setContent] = useState(page ? page.content : '')
  const [error, setError] = useState({})

  const handleContent = (event) => setContent(event.target.value)

  const handleChange = (event) => {
    const name = eval(event.target.name)
    const value = event.target.value
    name(value)
  }

  const validateField = (field, value) => {
    if (!value || value.length === 0) {
      setError((prevState) => ({
        ...prevState,
        [field]: `${field} field must be filled!`,
      }))
    } else {
      delete error[field]
      setError(error)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    p: 2,
  }
  const fieldGroup = [
    {
      label: 'Url',
      value: url,
      name: 'setUrl',
      required: true,
      onChange: handleChange,
      error: error.Url,
      helperText: error.Url,
    },
    {
      label: 'Title',
      value: title,
      name: 'setTitle',
      required: true,
      onChange: handleChange,
      error: error.Title,
      helperText: error.Title,
    },
  ]

  const validateCheck = () => {
    fieldGroup.forEach((field) => validateField(field.label, field.value))
    handleSubmit()
  }

  const handleSubmit = () => {
    // fieldGroup.forEach((field) => validateField(field.label, field.value))
    if (JSON.stringify(error) === '{}') {
      const pageData = {
        url: url,
        title: title,
        content: content,
        userId: page.userId ? page.userId : authService.currentUser.id,
      }
      if (page) pageData.id = page.id

      setUrl('')
      setTitle('')
      setContent('')
      onChangeData(pageData)
    }
  }
  return (
    <Modal open={isOpen} onClose={close}>
      <Box sx={style}>
        <Typography variant="h6" component="h6" sx={{ color: 'gray' }}>
          {JSON.stringify(page) === '{}' ? 'Create page' : 'Edit page'}
        </Typography>
        {fieldGroup.map((page) => (
          <Input
            key={page.label}
            name={page.name}
            label={page.label}
            value={page.value}
            required={page.required}
            onChange={page.onChange}
            error={page.error ? true : false}
            helperText={page.helperText}
          />
        ))}
        <Input
          label="Content"
          value={content}
          rows={4}
          multiline
          disabled={!title}
          onChange={handleContent}
        />
        <Button onClick={validateCheck} variant="outlined" sx={{ mt: 2, mr: 2 }}>
          Save
        </Button>
        <Button onClick={close} variant="text" sx={{ mt: 2 }}>
          Canсel
        </Button>
      </Box>
    </Modal>
  )
}
PageForm.defaultProps = {
  isOpen: false,
  close: () => {},
  page: {},
  onChangeData: () => {},
}

PageForm.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
  page: PropTypes.shape({
    id: PropTypes.number || PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    userId: PropTypes.number,
  }),
  onChangeData: PropTypes.func.isRequired,
}

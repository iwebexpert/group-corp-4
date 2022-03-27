import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContextConsumer } from '../../contexts/ThemeContext'

import PageForm from '../PageForm/PageForm.jsx'
import './PageEdit.sass'

export default function PageEdit({ page, onChangeData }) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <section className={'pageEditBlock pageEditBlock_' + context.theme}>
          <PageForm page={page} onChangeData={onChangeData} />
        </section>
      )}
    </ThemeContextConsumer>
  )
}
PageForm.defaultProps = {
  page: {},
  onChangeData: () => {},
}

PageForm.propTypes = {
  page: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onChangeData: PropTypes.func.isRequired,
}

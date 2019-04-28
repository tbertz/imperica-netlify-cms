import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, widgetFor }) => (
  <ServicesPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview

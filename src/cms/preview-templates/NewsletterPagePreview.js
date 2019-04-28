import React from 'react'
import PropTypes from 'prop-types'
import { NewsletterPageTemplate } from '../../templates/newsletter-page'

const NewsletterPagePreview = ({ entry, widgetFor }) => (
  <NewsletterPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

NewsletterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NewsletterPagePreview

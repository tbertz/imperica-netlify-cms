import React from 'react'
import PropTypes from 'prop-types'
import { MediaPageTemplate } from '../../templates/media-page'

const MediaPagePreview = ({ entry, widgetFor }) => (
  <MediaPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MediaPagePreview

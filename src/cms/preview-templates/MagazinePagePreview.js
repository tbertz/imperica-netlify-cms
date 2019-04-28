import React from 'react'
import PropTypes from 'prop-types'
import { MagazinePageTemplate } from '../../templates/magazine-page'

const MagazinePagePreview = ({ entry, widgetFor }) => (
  <MagazinePageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MagazinePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MagazinePagePreview

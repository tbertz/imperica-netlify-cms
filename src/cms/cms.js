import CMS from 'netlify-cms'

import MagazinePagePreview from './preview-templates/MagazinePagePreview'
import NewsletterPagePreview from './preview-templates/NewsletterPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import MediaPagePreview from './preview-templates/MediaPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('magazine', MagazinePagePreview)
CMS.registerPreviewTemplate('newsletter', NewsletterPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('media', MediaPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

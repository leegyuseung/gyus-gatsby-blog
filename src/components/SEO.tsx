import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title?: string
  description?: string
  thumbnail?: string
  pathname?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  thumbnail,
  pathname,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          thumbnail
        }
      }
    }
  `)

  const metaTitle =
    `${site.siteMetadata.title} : ${title}` || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = thumbnail || site.siteMetadata.thumbnail
  const metaUrl = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO

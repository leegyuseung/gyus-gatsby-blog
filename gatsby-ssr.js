import React from 'react'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'ko' }) // ✅ HTML 태그에 lang 속성 설정 (한국어)

  setHeadComponents([
    <meta key="og-type" property="og:type" content="website" />,
    <meta key="og-title" property="og:title" content="규승의 블로그" />,
    <meta
      key="og-description"
      property="og:description"
      content="규승의 블로그에 오신것을 환영합니다."
    />,
    <meta
      key="og-image"
      property="og:image"
      content="https://gyus-blog.netlify.app/thumbnail.webp"
    />,
    <meta
      key="og-url"
      property="og:url"
      content="https://gyus-blog.netlify.app/"
    />,
  ])
}

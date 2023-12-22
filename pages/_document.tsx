import { Html, Head, Main, NextScript } from 'next/document'
import Title from 'next/document'

export default function Document() {
  const meta = {
    title: 'Cappy\'s Meowbox',
    description: 'It is in fact my meowbox',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body className='overflow-x-clip'>
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

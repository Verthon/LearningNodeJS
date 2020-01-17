import React from 'react'
import Head from 'next/head'
import Nav from './nav'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const Layout = ({ title, links, children }) => {
  const theme = {
    mainfont:
      'Chivo, -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif',
    green: '#66BB6A',
    white: '#ffffff',
    darkgrey: '#607D8B',
    black: '#000000',
    text: '#263238',
    textlighter: '#324148',
  }

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    body {
      margin: 0;
      font-family: ${theme.mainfont};
      color: ${props => props.theme.text};
    }
    a {
      text-decoration: none;
      color: inherit;
    }

  `
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Head>
        <title>{title || 'Home'}</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css?family=Chivo:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav
        links={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
        ]}
      />
      {children}
    </ThemeProvider>
  )
}
export default Layout

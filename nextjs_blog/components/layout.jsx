import React from 'react'
import Head from 'next/head'
import Nav from './nav'

const Layout = ({ title, links, children }) => (
  <React.Fragment>
    <Head>
      <title>{title || 'Home'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav links={[{href: '/', label: 'Home'}, {href: '/blog', label: 'Blog'}]}/>
		{children}
  </React.Fragment>
)

export default Layout

import React from 'react'
import hero from '../public/images/hero.svg'

const Header = ({ title }) => (
  <React.Fragment>
    <header className="site-header">
      <article className="site-header__content">
<h1 className="site-header__title">{title}</h1>
      </article>
      <h1>TEst</h1>
    </header>

    <style jsx>
      {`
        .site-header {
          background-image: url('../public/images/hero.svg');
        }
      `}
    </style>
  </React.Fragment>
)

export default Header

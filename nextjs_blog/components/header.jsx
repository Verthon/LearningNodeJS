import React from 'react'
import hero from '../public/images/hero.svg'
import { Button } from './styles/Button';

const Header = ({ title, description }) => (
  <React.Fragment>
    <header className="site-header">
      <article className="site-header__content">
        <h1 className="site-header__title">{title}</h1>
<p className="site-header__description">{description}</p>
<Button>Invest now</Button>
      </article>
    </header>

    <style jsx>
      {`
        .site-header {
          background-image: url('../public/images/hero.svg');
        }
        .site-header__content {
          margin: 2rem;
        }
        .btn {
          background-color: #66BB6A;
          color: #ffffff;
        }

      `}
    </style>
  </React.Fragment>
)

export default Header

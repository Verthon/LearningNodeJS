import React from 'react'
import HeroSvg from '../public/images/hero.svg';
import { Button } from './styles/Button'
import styled from 'styled-components'
const Hero = styled.header`
  padding: 0 1rem;

  h1 {
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${props => props.theme.black};
  }
  p {
    margin: 1rem 0 2rem 0;
    line-height: 1.5;
    font-size: 0.875rem;
  }
`

const Header = ({ title, description }) => {
  return (
    <React.Fragment>
      <Hero>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button>Invest now</Button>
      </Hero>
      {/* <header className="site-header">
        <article className="site-header__content">
          <h1 className="site-header__title">{title}</h1>
          <p className="site-header__description">{description}</p>
          <Button>Invest now</Button>
        </article>
      </header> */}

      {/* <style jsx>
        {`
          // .site-header {
          //   background-image: url('../public/images/hero.svg');
          // }
          // .site-header__content {
          //   margin: 2rem;
          // }
        `}
      </style> */}
    </React.Fragment>
  )
}

export default Header

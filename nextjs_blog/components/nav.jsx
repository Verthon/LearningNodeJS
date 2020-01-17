import React from 'react'
import Link from 'next/link'
import Logo from './styles/Logo'
import styled from 'styled-components'

const Navigation = styled.nav`
  margin: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  svg {
    width: 4rem;
  }

  li {
    margin: 0 1rem;
  }

  a {
    color: ${props => props.theme.black};
  }
`

const Nav = ({ links }) => (
  <Navigation>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <ul>
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Navigation>
)

export default Nav

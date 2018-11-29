import React from 'react'
import styled from 'styled-components'

import { colors, type } from 'styles'
import Link from 'components/Link'
import { Instagram } from 'styled-icons/feather'

const NavContainer = styled.nav`
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 40px;
  padding: 20px 0 10px;
  border-bottom: 2px solid ${colors.primary};
`
const NavLink = styled(Link)`
  padding-right: 25px;
  font-style: initial;
  font-size: ${type.sizes.regular};
  font-weight: ${type.weights.regular};
`
const NavInstaLink = styled.a`
  margin-left: auto;
  padding-right: 20px;
`
const InstaIcon = styled(Instagram)`
  color: ${colors.white};
  stroke-width: 2;
`
const Nav = () => (
  <NavContainer>
    <NavLink to="#about">about</NavLink>
    <NavLink to="#blog">blog</NavLink>
    <NavLink to="#gallery">gallery</NavLink>
    <NavLink to="#contact">contact</NavLink>
    <NavInstaLink href="https://instagram.com" target="_blank">
      <InstaIcon size={24} />
    </NavInstaLink>
  </NavContainer>
)

export default Nav

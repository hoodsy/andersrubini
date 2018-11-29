import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, type } from 'styles'

export default styled(Link)`
  font-family: ${type.families.display};
  color: ${props => props.color || colors.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

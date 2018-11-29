import React from 'react'
import styled from 'styled-components'

import { colors, type } from 'styles'
import Nav from 'components/Nav'

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 20px;
  text-align: center;
`
const ContactText = styled.p`
  color: ${colors.white};
  /* font-size: ${type.sizes.large}; */
  font-weight: ${type.weights.semibold};
  margin: 0;
`
const ContactLink = styled.a`
  margin-top: 30px;
  color: ${colors.primary};
  font-size: ${type.sizes.xlarge};
  font-weight: 500;
  text-decoration: underline;
`
const Footer = () => (
  <>
    <ContactContainer id="contact">
      <ContactText>
        Let me help you get in the best shape of your life while having fun.
      </ContactText>
      <ContactLink
        href="https://goo.gl/forms/uKBsvOKQWOJXz2Wg1"
        target="_blank"
      >
        Get in touch
      </ContactLink>
    </ContactContainer>
    <Nav />
  </>
)

export default Footer

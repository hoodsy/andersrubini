import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import './layout.css'
import { colors, type } from 'styles'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: '${type.families.body}';
    font-style: normal;
    font-weight: normal;
    src: url('${type.fonts.AirbnbCereal}') format('truetype');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: normal;
    font-weight: 700;
    src: url('${type.fonts.OdudoSlabBold}') format('woff2');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: italic;
    font-weight: 700;
    src: url('${type.fonts.OdudoSlabBoldOblique}') format('woff2');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: normal;
    font-weight: 600;
    src: url('${type.fonts.OdudoSlabSemiBold}') format('woff2');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: italic;
    font-weight: 600;
    src: url('${type.fonts.OdudoSlabSemiBoldOblique}') format('woff2');
  }
    @font-face {
    font-family: '${type.families.display}';
    font-style: normal;
    font-weight: 400;
    src: url('${type.fonts.OdudoSlabRegular}') format('woff2');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: italic;
    font-weight: 400;
    src: url('${type.fonts.OdudoSlabRegularOblique}') format('woff2');
  }
    @font-face {
    font-family: '${type.families.display}';
    font-style: normal;
    font-weight: 100;
    src: url('${type.fonts.OdudoSlabLight}') format('woff2');
  }
  @font-face {
    font-family: '${type.families.display}';
    font-style: italic;
    font-weight: 700;
    src: url('${type.fonts.OdudoSlabLightOblique}') format('woff2');
  }
`

const PageContainer = styled.div`
  font-family: ${type.families.body};
  font-size: ${type.regular};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Anders Rubini - Personal Trainer and Nutrition Coach',
            },
            {
              name: 'keywords',
              content: 'fitness, nutrition, health, flexibility, mobility',
            },
          ]}
        />
        <>
          <GlobalStyles />
          <PageContainer>{children}</PageContainer>
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

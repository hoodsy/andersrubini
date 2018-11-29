import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import './layout.css'
import { colors, type } from 'styles'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Odudo Slab';
    font-style: normal;
    font-weight: 700;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabBold
    }') format('woff2');
  }
  @font-face {
    font-family: 'Odudo Slab';
    font-style: italic;
    font-weight: 700;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabBoldOblique
    }') format('woff2');
  }
  @font-face {
    font-family: 'Odudo Slab';
    font-style: normal;
    font-weight: 600;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabSemiBold
    }') format('woff2');
  }
  @font-face {
    font-family: 'Odudo Slab';
    font-style: italic;
    font-weight: 600;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabSemiBoldOblique
    }') format('woff2');
  }
    @font-face {
    font-family: 'Odudo Slab';
    font-style: normal;
    font-weight: 400;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabRegular
    }') format('woff2');
  }
  @font-face {
    font-family: 'Odudo Slab';
    font-style: italic;
    font-weight: 400;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabRegularOblique
    }') format('woff2');
  }
    @font-face {
    font-family: 'Odudo Slab';
    font-style: normal;
    font-weight: 100;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabLight
    }') format('woff2');
  }
  @font-face {
    font-family: 'Odudo Slab';
    font-style: italic;
    font-weight: 700;
    src: local('Odudo Slab'), url('${
      type.fonts.OdudoSlabLightOblique
    }') format('woff2');
  }
`

const PageContainer = styled.div`
  font-family: ${type.families.body};
  font-size: ${type.regular};
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <GlobalStyles />
        </Helmet>
        <PageContainer>{children}</PageContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

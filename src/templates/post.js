import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { colors, type } from 'styles'
import Layout from 'components/layout'
import Nav from 'components/Nav'
import Link from 'components/Link'
import Footer from 'components/Footer'

const BlogContainer = styled.article`
  padding: 30px 20px;
  background: ${colors.white};
`
const BlogTitle = styled.h1`
  margin: 10px 0 20px;
  font-family: ${type.families.display};
  font-weight: 500;
  font-size: ${type.sizes.xlarge};
`
const BlogBody = styled.p`
  margin-bottom: 0;
`

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <Nav />
        <BlogContainer>
          <BlogTitle dangerouslySetInnerHTML={{ __html: post.title }} />
          <BlogBody dangerouslySetInnerHTML={{ __html: post.content }} />
        </BlogContainer>
        <Footer />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { graphql, navigate } from 'gatsby'

import { colors, type } from 'styles'
import Layout from 'components/layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Link from 'components/Link'
import heroImage from 'assets/images/hero.png'

const HeroContainer = styled.section`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
`

// ================================================
// TitleBox
// ================================================
const TitleBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px;
  padding-left: 40px;
  margin-top: 393px;
  background: ${colors.primary};
`
const TitleLabel = styled.p`
  margin-bottom: 5px;
  color: ${colors.white};
  font-size: ${type.sizes.medium};
  font-weight: ${type.weights.regular};
  font-family: ${type.families.display};
`
const Title = styled.h1`
  margin: 0;
  color: ${colors.white};
  font-weight: ${type.weights.regular};
  font-style: italic;
  font-family: ${type.families.display};
`

// ================================================
// About
// ================================================
const AboutContainer = styled.section`
  margin: 120px 0;
`
const AboutBody = styled.article`
  position: relative;
  padding: 40px 20px;
  background: ${colors.white};
`
const AboutLabel = styled.label`
  position: absolute;
  top: -15px;
  padding: 5px 10px;
  background: ${colors.primary};
  color: ${colors.white};
  font-family: ${type.families.display};
`
const AboutText = styled.p`
  margin-bottom: 0;
`

// ================================================
// Blog
// ================================================
const BlogContainer = styled.section`
  position: relative;
  padding: 120px 20px;
  background-color: ${colors.primary};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23262726' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`
const BlogBody = styled.div`
  position: relative;
`
const BlogLabel = styled.label`
  z-index: 10;
  position: absolute;
  top: -120px;
  left: 20px;
  padding: 5px 10px;
  background: ${colors.black};
  color: ${colors.white};
  font-family: ${type.families.display};
`
const BlogItem = styled.article`
  position: relative;
  margin-bottom: 10px;
  padding: 20px;
  background: ${colors.white};
  border-radius: 3px;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease-in;
  &:hover {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`
const BlogItemLine = styled.div`
  height: 2px;
  width: 30%;
  background: ${colors.primary};
`
const BlogTitle = styled.h1`
  margin: 10px 0;
  font-family: ${type.families.display};
  font-weight: 500;
  font-size: ${type.sizes.large};
`
const BlogExcerpt = styled.p`
  margin-bottom: 0;
`

// ================================================
// Gallery
// ================================================
const GalleryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 120px 20px;
  background-color: ${colors.white};
`
const GalleryLabel = styled.label`
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 40px;
  padding: 5px 10px;
  background: ${colors.primary};
  color: ${colors.white};
  font-family: ${type.families.display};
`
const GalleryImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.black};
  width: calc(50% - 1px);
  height: 256px;
  margin: 0;
  margin-bottom: 2px;
  &:nth-child(even) {
    margin-right: 2px;
  }
  @media (min-width: 992px) {
    width: calc(33% - 2px);
    margin-right: 2px;
  }
`
const GalleryImage = styled.img`
  height: 100%;
  margin: 0;
  object-fit: contain;
`

const IndexPage = ({ data }) => (
  <Layout>
    <HeroContainer>
      <TitleBox>
        <TitleLabel>coach & chef</TitleLabel>
        <Title>Anders</Title>
        <Title>Rubini</Title>
      </TitleBox>
    </HeroContainer>

    <Nav />

    <AboutContainer id="about">
      <AboutBody>
        <AboutLabel>about</AboutLabel>
        <AboutText>
          Anders Rubini is originally from Denmark, and has been physically
          active most of his life by doing judo, skate boarding and old
          fashioned strength training.
          <br />
          <br />
          He is an eleiko certified strength coach, and has been spending time
          at Gerlev sports academy.
          <br />
          <br />
          Studying subjects such as, crossfit, natural movement, parkour,
          martial arts, psychology of movement, mindfulness and much more.
          <br />
          <br />
          Apart from that he is also a professional chef and has a great passion
          for food.
          <br />
          <br />
          He now helps people achieving their physical goals in a fun and
          playful way. Using tools such as Gymnastic Rings, Olympic lifts,
          powerlifting, sprinting, jumping, crawling and much, much more!
        </AboutText>
      </AboutBody>
    </AboutContainer>

    <BlogContainer id="blog">
      <BlogBody>
        <BlogLabel>blog</BlogLabel>
        {data.allWordpressPost.edges.map(({ node }) => (
          <BlogItem
            onClick={() => navigate(`/blog/${node.slug}`)}
            key={node.id}
          >
            <BlogItemLine />
            <BlogTitle dangerouslySetInnerHTML={{ __html: node.title }} />
            <BlogExcerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </BlogItem>
        ))}
      </BlogBody>
    </BlogContainer>

    <GalleryContainer id="gallery">
      <GalleryLabel>gallery</GalleryLabel>
      {data.allWordpressWpMedia.edges.map(({ node }) => (
        <GalleryImageContainer>
          <GalleryImage src={node.source_url} key={node.id} />
        </GalleryImageContainer>
      ))}
    </GalleryContainer>

    <Footer />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWordpressWpMedia {
      edges {
        node {
          id
          mime_type
          media_details {
            width
            height
            file
          }
          source_url
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage

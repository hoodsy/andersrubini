import React from 'react'
import styled from 'styled-components'
import { graphql, navigate } from 'gatsby'

import { colors, type } from 'styles'
import Layout from 'components/layout'
import Link from 'components/Link'
import { Instagram } from 'styled-icons/feather'
import heroImage from 'assets/images/hero.png'

const HeroContainer = styled.section`
  background-image: url(${heroImage});
  background-repeat: no-repeat;
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
// Nav
// ================================================
const Nav = styled.nav`
  display: flex;
  margin-top: 60px;
  margin-left: 40px;
  padding: 20px 0 10px;
  border-bottom: 2px solid ${colors.primary};
`
/* const NavLink = styled.a` */
const NavLink = styled(Link)`
  padding-right: 25px;
`
const NavInstaLink = styled.a`
  margin-left: auto;
  padding-right: 20px;
`
const InstaIcon = styled(Instagram)`
  color: ${colors.white};
  stroke-width: 2;
`

// ================================================
// About
// ================================================
const AboutContainer = styled.section`
  margin: 120px 0;
  padding: 0 20px;
`
const AboutBody = styled.article`
  position: relative;
  padding: 40px 20px;
  background: ${colors.white};
  border-radius: 3px;
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
const BlogLink = styled(Link)`
  font-style: italic;
  font-size: ${type.sizes.small};
  text-decoration: underline;
  color: ${colors.primary};
`

// ================================================
// Gallery
// ================================================
const GalleryContainer = styled.section`
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
const GalleryImage = styled.img`
  width: calc(50% - 1px);
  height: 128px;
  margin: 0;
  &:nth-child(even) {
    margin-right: 2px;
  }
`

// ================================================
// Contact
// ================================================
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
  margin: 0;
`
const ContactLink = styled.a`
  margin-top: 10px;
  color: ${colors.primary};
  font-size: ${type.sizes.large};
  font-weight: 500;
  text-decoration: underline;
`

const IndexPage = ({ data }) => (
  <Layout onClick={console.log(data)}>
    <HeroContainer>
      <TitleBox>
        <TitleLabel>coach & chef</TitleLabel>
        <Title>Anders</Title>
        <Title>Rubini</Title>
      </TitleBox>
    </HeroContainer>

    <Nav>
      <NavLink to="#about">about</NavLink>
      <NavLink to="#blog">blog</NavLink>
      <NavLink to="#gallery">gallery</NavLink>
      <NavLink to="#contact">contact</NavLink>
      <NavInstaLink href="https://instagram.com" target="_blank">
        <InstaIcon size={24} />
      </NavInstaLink>
    </Nav>

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
            <BlogTitle>{node.title}</BlogTitle>
            <BlogExcerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <BlogLink>Read More</BlogLink>
          </BlogItem>
        ))}
      </BlogBody>
    </BlogContainer>

    <GalleryContainer id="gallery">
      <GalleryLabel>gallery</GalleryLabel>
      {data.allWordpressWpMedia.edges.map(({ node }) => (
        <GalleryImage src={node.source_url} key={node.id} />
      ))}
    </GalleryContainer>

    <ContactContainer id="contact">
      <ContactText>Ready to get in the best shape of your life?</ContactText>
      <ContactLink
        href="https://goo.gl/forms/uKBsvOKQWOJXz2Wg1"
        target="_blank"
      >
        Get in touch
      </ContactLink>
    </ContactContainer>
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

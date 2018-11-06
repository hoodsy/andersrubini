import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'
import heroImage from 'assets/images/hero.png'

const IndexPage = () => (
  <Layout>
    <h1>Test the font fami</h1>
    <img src={heroImage} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

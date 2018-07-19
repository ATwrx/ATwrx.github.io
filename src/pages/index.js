import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to my portfolio </h1>
    <Link to="/ContactPage/">Go to page 2</Link>
    <br/>
    <Link to="/Counter/">Go to Counter Page</Link>
  </div>
)

export default IndexPage

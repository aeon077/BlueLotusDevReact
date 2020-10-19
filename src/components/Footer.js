import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import FooterStyles from './footer.module.scss'


const Footer = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //  site {
  //    siteMetadata {
  //      author
  //    }
  //  }
  // }
  //    `)

  return (
    <footer className={FooterStyles.footer}>
      <p>Created by Carolyn Schiltz, © 2020</p>
    </footer>
  )
}

export default Footer
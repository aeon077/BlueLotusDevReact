import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery } from 'react-dom'

const Head = ({ title }) => {
    // const data = useStaticQuery(graphql`
    // query {
    //     site {
    //         siteMetadata {
    //             title
    //         }
    //     }
    // }`)

    return (
        <Helmet title={`${title} | Here`} />
        // <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head
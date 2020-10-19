import React from 'react';
import { Link } from 'react-dom'
import Head from '../components/Head';
import Layout from '../components/Layout'

const NotFound = () => {

    return (
        <Layout>
            <Head title="Not Found" />
            <h1>Page Not Found</h1>
            <p><Link to="/">Head back home</Link></p>
        </Layout>

    )
}

export default NotFound
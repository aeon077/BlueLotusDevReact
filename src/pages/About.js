import React from 'react';
import { Link } from 'react-dom'
import Layout from '../components/Layout';
import Head from '../components/Head';


const About = () => {

    return (
        <>
            <Layout>
                <Head title="About" />
                <div>
                    <h1>Hi, I'm Carolyn.</h1>

                    <p>I am a Fullstack Web Developer and Graphic Designer.</p>
                    <p>Want to work with me?<a href="/contact">Contact me.</a></p>
                </div>
            </Layout>
        </>
    )
}

export default About;
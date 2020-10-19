import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';




const Contact = () => {

    return (
        <>
            <Layout>
                <Head title="Contact" />
                <div>
                    <h1>Contact me!</h1>
                    <p>Email: Carolyn.schiltz@gmail.com</p>
                    <p>Connect with me on <a href="https://www.linkedin.com/in/carolynschiltz" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p>Visit my work on <a href="https://github.com/aeon077" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p>View my Graphic Design Portfolio on <a href="https://www.coroflot.com/carolynschiltz" target="_blank" rel="noopener noreferrer">Cloroflot</a></p>
                </div>
            </Layout>
        </>
    )
}

export default Contact;
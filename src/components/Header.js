import React from 'react';
import headerStyles from './header.module.scss';
import Lotus from '../images/lotus-flower.png';
import { HouseDoorFill, FilePerson, CodeSlash } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    //     const data = useStaticQuery(graphql`
    //      query {
    //   site {
    //     siteMetadata {
    //       title
    //     }
    //   }
    // }
    //     `)

    return (
        <>
            <header className={headerStyles.header}>
                <nav className={headerStyles.nav}>
                    <div className={headerStyles.logo}>
                        <div className={headerStyles.span}> <img src={Lotus} alt="Lotus Logo" /></div>
                        <div className={headerStyles.span}>
                            <a href="/" className={headerStyles.title}>
                                Blue Lotus Dev
                        </a></div>
                    </div>
                    <ul className={headerStyles.navlist}>
                        <li><a className={headerStyles.navitem} href="/"><FontAwesomeIcon icon={["fas", "faHome"]} />  Home</a></li>
                        <li><a className={headerStyles.navitem} href="/about"><FilePerson color="white" size={20} />  About Me</a></li>
                        <li><a className={headerStyles.navitem} href="/contact"><CodeSlash color="white" size={20} />  Portfolio</a></li>
                        <li><a className={headerStyles.navitem} href="/contact">Contact</a></li>
                        <li><a className={headerStyles.navitem} href="/blog">Blog</a></li>
                    </ul>
                </nav>

            </header>
        </>)
}

export default Header;
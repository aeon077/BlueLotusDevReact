import React from 'react';
import headerStyles from './header.module.scss';
import Lotus from '../images/lotus-flower.png';
import './fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                        <li><a className={headerStyles.navitem} href="/"><FontAwesomeIcon icon={['fas', 'home']} size="xs"/>  Home</a></li>
                        <li><a className={headerStyles.navitem} href="/about"><FontAwesomeIcon icon={['fas', 'user']} size="xs"/> About Me</a></li>
                        <li><a className={headerStyles.navitem} href="/contact"><FontAwesomeIcon icon={['fas', 'code']} size="xs"/> Portfolio</a></li>
                        <li><a className={headerStyles.navitem} href="/contact"><FontAwesomeIcon icon={['fas', 'paper-plane']} size="xs"/> Contact</a></li>
                        <li><a className={headerStyles.navitem} href="/blog"><FontAwesomeIcon icon={['fas', 'blog']} size="xs"/> Blog</a></li>
                    </ul>
                </nav>

            </header>
        </>)
}

export default Header;
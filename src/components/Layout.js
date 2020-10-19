import React from 'react';
// import '../styles/index.scss';
import layoutStyles from './layout.module.scss'

const Layout = (props) => {

    return (
        <>
            <div className={layoutStyles.content}>
                <div className={layoutStyles.container}>

                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
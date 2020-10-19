import React from 'react';
import Layout from './Layout';
import Head from './Head';
import Indexy from '../pages/index.module.scss';


const Main = () => {


  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, World</h1>
      <div className={Indexy.codeBlock}>
        <code>{` const Carolyn = (FullStack Web Developer) =>   {`}</code><br />
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return ( making awesome web things`}</code><br />
        <code>&nbsp;&nbsp;{` );`}</code>
        <br />
        <code>{` };`}</code>

      </div>
    </Layout>

  )
}

export default Main;
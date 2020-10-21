import React from 'react';
import Layout from '../components/Layout';
// import { Link, useStaticQuery } from 'react-dom'
import blogStyles from './blog.module.scss'
import Head from '../components/Head';
import useContentful from '../hooks/use-contentful';
import '../components/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const query = `
query {
  blogPostCollection {
    items {
      title
      slug
      publishedDate  
        }
    }
  }`

const BlogPage = () => {
  let { data, errors } = useContentful(query)
  if (errors)
    return <span style={{ color: 'red' }}>{errors.map((error) => error.message).join(",")}</span>
  if (!data) return <span>Loading ...</span>;

  return (
    <>
      <Layout >
        <Head title="Blog" />
        <h1><FontAwesomeIcon icon={['fas', 'blog']} size="s"/>  My Blog!</h1>
        <hr />
        <div></div>
        <ol className={blogStyles.posts}>

          {
            data.blogPostCollection.items.map((item) => {
              return (
                <li className={blogStyles.post} key={item.slug}>
                  <h2>{item.title}</h2>
                  <p><a href={`/blog/${item.slug}`}> {'-->'} Read More</a></p>
                  <p>Date: {item.publishedDate}</p>
                </li>
              )
            })
          }

        </ol>
      </Layout>
    </>
  )
}

export default BlogPage;
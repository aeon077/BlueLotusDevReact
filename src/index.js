import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/22g14lwap6f0',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
  }
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
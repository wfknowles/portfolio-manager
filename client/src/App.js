import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

// global state
import { setContext } from '@apollo/client/link/context';
import { AppProvider } from "./utils/GlobalState/GlobalState";

// content
import Public from './components/Public/Public';
import Private from './components/Private/Private';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Public />
        <Private />
      </AppProvider>
    </ApolloProvider>
  )
}

export default App;

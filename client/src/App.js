import React from 'react';
import './App.css';

// apollo dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// layout components
import Header from './components/Header';
import Footer from './components/Footer';

// page components
import Home from './pages/Home';

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
      <div className="app">
        <Router>
          <Header />
            <div className="content-wrap">  
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/signup" component={SignupForm} />
              </Switch>
            </div>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App;

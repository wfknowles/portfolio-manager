import React, { useEffect } from 'react';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Root from './pages/Root';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

import { 
  UPDATE_VIEW_PRIVATE_MENU,
  TOGGLE_MENU
} from '../../utils/GlobalState/actions';

import './Public.css';

function Public () {

  const [state, dispatch ] = useAppContext();
  const {
    viewPrivateMenu,
    viewPrivateContent
  } = state;

  const openPrivateMenu = () => {
    console.log('openPrivateMenu');
    dispatch({
      type: TOGGLE_MENU,
      viewPrivateMenu: true,
      viewPublicContent: true
    });
  }
  
  const getPublicClassName = () => {
    let klass = "";

    if (viewPrivateMenu && viewPrivateContent) {

      klass = "closed";

    } else if ( viewPrivateMenu ) {

      klass = "sidebar";

    } else {

      klass = "open";

    }

    return klass;
  }

  const publicClassName = getPublicClassName();

  return (
    !viewPrivateContent && (
      <div id="public" className={publicClassName}>
        {
          !viewPrivateMenu && (
            <button id="viewPrivateMenu" onClick={() => openPrivateMenu()}>Menu</button>
          )
        }
        <header>
          <Header />
        </header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  )
}

export default Public;
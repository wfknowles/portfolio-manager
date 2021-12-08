import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ActionButton from '../Buttons/ActionButton';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Root from './pages/Root';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { OPEN_MENU } from '../../utils/GlobalState/actions';
import LocalStorage from '../../utils/LocalStorage';
import { addClass } from '../../utils/helpers';

import './Public.css';

function Public () {

  const [ state, dispatch ] = useAppContext();
  const { viewPrivateMenu, viewPrivateContent } = state;

  // get multiple properties from localStorage's state
  const [ browserViewPrivateMenu, browserViewPrivateContent ] = LocalStorage.getState(["viewPrivateMenu", "viewPrivateContent"]);

  // set state and localStorage properties
  const openPrivateMenu = () => {

    LocalStorage.setState({
      viewPrivateMenu: true
    });

    dispatch({
      type: OPEN_MENU
    });

  }
  
  const getPublicClassName = () => {
    let klass = "";
    
    if ( ( viewPrivateMenu && viewPrivateContent ) || ( browserViewPrivateMenu && browserViewPrivateContent ) ) {
      // if private menu and private content are open, public is closed
      klass = "closed";

    } else if ( viewPrivateMenu || browserViewPrivateMenu ) {
      // if private menu is open, public is open and allowing room for the menu
      klass = "menu-open";

    } else {
      // public is fully open
      klass = "open";

    }

    return klass;
  }

  // cant use function inside React return
  const publicClassName = getPublicClassName();

  return (

    !viewPrivateContent && (
      <div className={addClass('public', publicClassName)}>
        {
          !viewPrivateMenu && (
            <ActionButton className="fa fa-chevron-circle-left show-hover fixed-top-right dark" click={openPrivateMenu} />
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
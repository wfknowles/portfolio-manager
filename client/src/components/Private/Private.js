import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateMenu from './PrivateMenu';
import PrivateContent from './PrivateContent';
import { 
  UPDATE_VIEW_PRIVATE_MENU,
  UPDATE_VIEW_PRIVATE_CONTENT,
} from '../../utils/GlobalState/actions';

import './Private.css';



function Private () {

  const [state, dispatch ] = useAppContext();
  const {
    viewPrivateMenu,
    viewPrivateContent
  } = state;
  
  const getPrivateClassName = () => {
    let klass = "";

    if (viewPrivateMenu && viewPrivateContent) {

      klass = "open";

    } else if ( viewPrivateMenu ) {

      klass = 'sidebar';

    } else {

      klass = 'closed';

    }

    return klass;
  }

  const privateClassName = getPrivateClassName();

  return (

    (viewPrivateContent || viewPrivateMenu) && (
      <div id="private" className={privateClassName} >
        {
          viewPrivateMenu && (
            <div id="privateMenu">
              <PrivateMenu />
            </div>
          )
        }
        {
          viewPrivateContent && (
            <div id="privateContentWrapper">
              <PrivateContent />
            </div>
          )
        }
    </div>
    )
    
  )
}

export default Private;
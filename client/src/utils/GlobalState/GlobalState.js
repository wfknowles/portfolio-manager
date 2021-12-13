import React, { createContext, useContext } from "react";
import { useAppReducer } from './reducers';
import LocalStorage from '../LocalStorage';


const AppContext = createContext();
const { Provider } = AppContext;
const [ 
  browserLoggedIn,
  browserViewPrivateMenu, 
  browserViewPrivateContent, 
  browserViewPublicContent,
  browserCurrentPrivate 
] = LocalStorage.getState(['loggedIn', 'viewPrivateMenu', 'viewPrivateContent', 'viewPublicContent', 'currentPrivate']);

const AppProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useAppReducer({
    loggedIn: browserLoggedIn,
    viewPrivateMenu: browserViewPrivateMenu,
    viewPrivateContent: browserViewPrivateContent,
    viewPublicContent: browserViewPublicContent,
    currentPrivate: browserCurrentPrivate,
    project: {},
    options: {},
    projects: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
import React, { createContext, useContext } from "react";
import { useAppReducer } from './reducers';


const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useAppReducer({
    loggedIn: false,
    viewPrivateMenu: false,
    viewPrivateContent: false,
    viewPublicContent: true,
    currentPrivate: '',
    currentUser: false,
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
import React, { createContext, useContext } from "react";
import { useAppReducer } from './reducers';
import { techOptions } from '../staticData.js';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useAppReducer({
    currentDash: '',
    project: {},
    options: {},
    projects: [],
    tech: techOptions
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
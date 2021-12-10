import { useReducer } from 'react';
import {
  SET_PROJECT,
  SET_OPTIONS,
  TOGGLE_MENU,
  TOGGLE_CONTENT,
  OPEN_MENU,
  OPEN_CURRENT_PRIVATE,
  LOG_IN,
  LOG_OUT
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

      case SET_PROJECT:
        return {
          ...state,
          ...action.reducedProject // reduced by ReactForms
        };
      case SET_OPTIONS:
        return {
          ...state,
          options: action.options
        };
      case TOGGLE_MENU:
        return {
          ...state,
          viewPrivateMenu: action.viewPrivateMenu,
          viewPrivateContent: action.viewPrivateContent
        };
      case TOGGLE_CONTENT:
        return {
          ...state,
          viewPrivateContent: action.viewPrivateContent,
          viewPublicContent: action.viewPublicContent
        };
      case OPEN_MENU:
        return {
          ...state,
          viewPrivateMenu: true
        };
      case OPEN_CURRENT_PRIVATE:
        return {
          ...state,
          currentPrivate: action.currentPrivate,
          viewPrivateContent: true,
          viewPublicContent: false
        };
      case LOG_IN:
        return {
          ...state,
          loggedIn: true,
          currentUser: action.currentUser
        };
      case LOG_OUT:
        return {
          ...state,
          currentUser: false,
          currentPrivate: false,
          viewPrivateMenu: false,
          viewPrivateContent: false,
          viewPublicContent:true
        };

      default:
        return state;
    }

};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
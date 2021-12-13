import { useReducer } from 'react';
import {
  SET_PROJECT,
  SET_OPTIONS,
  OPEN_MENU,
  OPEN_PRIVATE_CONTENT,
  CLOSE_PRIVATE_CONTENT,
  CLOSE_PRIVATE_MENU,
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
      case OPEN_MENU:
        return {
          ...state,
          viewPrivateMenu: true
        };
      case OPEN_PRIVATE_CONTENT:
        return {
          ...state,
          currentPrivate: action.currentPrivate,
          viewPrivateContent: true,
          viewPublicContent: false
        }
      case CLOSE_PRIVATE_CONTENT:
        return {
          ...state,
          currentPrivate: undefined,
          viewPrivateContent: false,
          viewPublicContent: true
        }
      case CLOSE_PRIVATE_MENU:
        return {
          ...state,
          viewPrivateMenu: false
        }
      case LOG_IN:
        return {
          ...state,
          loggedIn: true
        };
      case LOG_OUT:
        return {
          ...state,
          loggedIn: false,
          currentPrivate: undefined,
          viewPrivateMenu: false,
          viewPrivateContent: false,
          viewPublicContent: true
        };

      default:
        return state;
    }

};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
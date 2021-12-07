import { useReducer } from 'react';
import {
  ADD_PROJECT,
  SET_OPTIONS,
  UPDATE_CURRENT,
  TOGGLE_MENU,
  TOGGLE_PRIVATE,
  UPDATE_VIEW_PRIVATE_MENU,
  UPDATE_VIEW_PRIVATE_CONTENT,
  UPDATE_CURRENT_PRIVATE
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

      case ADD_PROJECT:
        return {
          ...state,
          ...action.reducedProject // reduced by ReactForms
        };
      case SET_OPTIONS:
        return {
          ...state,
          ...action.reducedOptions // reduced by ReactForms
        };
      case UPDATE_CURRENT:
        return {
          ...state,
          currentDash: action.currentDash
        };

      case TOGGLE_MENU:
        return {
          ...state,
          viewPrivateMenu: action.viewPrivateMenu,
          viewPrivateContent: action.viewPrivateContent
        };
      case TOGGLE_PRIVATE:
        return {
          ...state,
          viewPrivateContent: action.viewPrivateContent,
          viewPublicContent: action.viewPublicContent
        };

      case UPDATE_VIEW_PRIVATE_MENU:
        return {
          ...state,
          viewPrivateMenu: action.viewPrivateMenu
        };
      case UPDATE_VIEW_PRIVATE_CONTENT:
        return {
          ...state,
          viewPrivateContent: action.viewPrivateContent
        };
      case UPDATE_CURRENT_PRIVATE:
        return {
          ...state,
          currentPrivate: action.currentPrivate,
          viewPrivateContent: action.viewPrivateContent
        };

      default:
        return state;
    }

};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
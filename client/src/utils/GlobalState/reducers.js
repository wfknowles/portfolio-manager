import { useReducer } from 'react';
import {
  ADD_PROJECT,
  SET_OPTIONS,
  UPDATE_CURRENT,
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


      case UPDATE_VIEW_PRIVATE_MENU:
        console.log('UPDATE_VIEW_PRIVATE_MENU', action.viewPrivateMenu);
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
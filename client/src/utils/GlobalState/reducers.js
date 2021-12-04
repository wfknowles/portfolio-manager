import { useReducer } from 'react';
import {
  ADD_PROJECT,
  UPDATE_CURRENT
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

      case ADD_PROJECT:
        return {
          ...state,
          ...action.reducedProject
        };
      case UPDATE_CURRENT:
        return {
          ...state,
          currentDash: action.currentDash
        };

      default:
        return state;
    }

};

export function useAppReducer(initialState) {
  return useReducer(reducer, initialState);
}
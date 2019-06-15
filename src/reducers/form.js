import {GET_FORM_DATA } from "../actions";

export const formReducer = (state=[], action) => {
  if (action.type === GET_FORM_DATA){
    return [...state, action.payload];
  } else {
    return state;
  }
};
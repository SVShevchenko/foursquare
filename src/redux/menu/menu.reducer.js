import * as types from './menu.types';

const initialState = {
  menu: null,
  isLoading: false,
  error: ''
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_MENU:
      return {
        ...state,
        menu: action.payload.menu,
        isLoading: false
      };
    default:
      return state;
  }
};

export default menu;

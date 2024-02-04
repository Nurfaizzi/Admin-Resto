import { TYPES } from "../Types";

const initialState = {
  list_menu: [],
};

export const Menu = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ALL_MENU:
      return {
        ...state,
        list_menu: action.payload.data,
      };
    default:
      return state;
  }
};

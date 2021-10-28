import { SET_USER } from "../actions/types.js";

// Update user:
export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};
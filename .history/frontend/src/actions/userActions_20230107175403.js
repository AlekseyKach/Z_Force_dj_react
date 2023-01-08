import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT


} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    
} catch (error) {
  dispatch({
    type: PRODUCT_DETAILS_FAIL,
    payload: error.response && error.response.data.detail
        ? error.response.data.detail
        :error.message,
  })


}
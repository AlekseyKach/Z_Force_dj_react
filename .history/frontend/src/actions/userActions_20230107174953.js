import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT


} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await axios.post("/api/login", { email, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
}
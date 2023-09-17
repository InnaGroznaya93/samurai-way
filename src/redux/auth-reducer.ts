import { authAPI, securityAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkDispatchType } from "./redux-store";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_LOGIN_ERROR = "auth/SET-LOGIN-ERROR";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

export type DataType = {
  email: null | string;
  login: string | null;
  id: number | null;
  captchaURL: string | null;
};

export type InitialStateType = {
  data: DataType;
  isAuth: boolean;
  error: string | null;
};

let initialState: InitialStateType = {
  data: {
    email: null,
    login: null,
    id: null,
    captchaURL: null
  },
  isAuth: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, data: action.data, isAuth: action.isAuth };

    case SET_LOGIN_ERROR:
      return { ...state, error: action.error };

    case GET_CAPTCHA_URL_SUCCESS:
        return {...state, data: {...state.data, captchaURL: action.url}}  

    default:
      return state;
  }
};

//AC:
export const setAuthUserDataAC = (data: DataType, isAuth: boolean) =>
  ({
    type: SET_USER_DATA,
    data,
    isAuth,
  } as const);
export const setLoginError = (error: string | null) =>
  ({
    type: SET_LOGIN_ERROR,
    error,
  } as const);

export const getCaptchaURLSuccess = (url: string) =>
 (
    {type: GET_CAPTCHA_URL_SUCCESS,
    url,
  } as const);

//TC:
export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataAC(response.data.data, true));
  }
};

export const loginTC =
  (data: { email: string; password: string; rememberMe: boolean }) =>
  async (dispatch: ThunkDispatchType) => {
    let res = await authAPI.login(data);
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptchaURL());
      }
      dispatch(
        setLoginError(
          res.data.messages.length ? res.data.messages[0] : "Some error"
        )
      );
    }
  };

export const logoutTC = () => async (dispatch: ThunkDispatchType) => {
  let res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserDataAC({ email: null, login: null, id: null, captchaURL: null }, false));
  }
};

export const getCaptchaURL = () => async (dispatch: Dispatch) => {
  const response = await securityAPI.getCaptchaURL();
  const captchaURL = response.data.url;
  dispatch(getCaptchaURLSuccess(captchaURL));
};

//types:
type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>;
type SetLoginErrorType = ReturnType<typeof setLoginError>;
type GetCaptchaURLSuccessType = ReturnType<typeof getCaptchaURLSuccess>;

type ActionType =
  | SetUserDataACType
  | SetLoginErrorType
  | GetCaptchaURLSuccessType;

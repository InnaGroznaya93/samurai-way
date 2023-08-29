 import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_LOGIN_ERROR = 'auth/"SET-LOGIN-ERROR"'

export type DataType = {
    email: null | string,
    login: string | null,
    id: number | null,
}

export type InitialStateType = {
    data: DataType
    isAuth: boolean
    error: string | null
}

let initialState: InitialStateType = {
    data: {
        email: null,
        login: null,
        id: null
    },
    isAuth: false,
    error: null
}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, data: action.data, isAuth: action.isAuth}

        case SET_LOGIN_ERROR:
            return {...state, error: action.error}

        default:
            return state
    }
}

type ActionType = SetUserDataACType | SetLoginErrorType

type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
type SetLoginErrorType = ReturnType<typeof setLoginError>

export const setAuthUserDataAC = (data: DataType, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data, isAuth
} as const)
export const setLoginError = (error: string | null) => ({
    type: SET_LOGIN_ERROR,
    error
}as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(response.data.data, true))
            }
}

export const loginTC = (data: { email: string, password: string, rememberMe: boolean }) => async (dispatch: Dispatch) => {
    let res = await authAPI.login(data)
        if (res.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getAuthUserData())
        } else {
            dispatch(setLoginError(res.data.messages.length ? res.data.messages[0] : 'Some error'))
        }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            // @ts-ignore
            dispatch(setAuthUserDataAC({email: null, login: null, userId: null}, false))
        }
}
import {Dispatch} from "redux";
import {getAuthUserData} from "../../src/redux/auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
   initialized: false
}
type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        case SET_INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }

        default:
            return state
    }
}

type ActionType = SetUserDataACType

type SetUserDataACType = ReturnType<typeof setInitializedSuccessAC>

export const setInitializedSuccessAC = () => ({
    type: SET_INITIALIZED_SUCCESS
} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
// @ts-ignore
    let promise = dispatch(getAuthUserData())

    promise.then(() => dispatch(setInitializedSuccessAC()))
}
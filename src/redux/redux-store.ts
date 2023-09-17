import {applyMiddleware, combineReducers,  createStore, compose, AnyAction} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, { ThunkDispatch } from "redux-thunk"
import {appReducer} from "../../src/redux/app-reducer";
import { useDispatch } from "react-redux";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

export type ReduxStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
// export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ThunkDispatchType = ThunkDispatch<ReduxStoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()

// @ts-ignore
window.store = store


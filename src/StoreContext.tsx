import React from "react";
import {ReduxStoreType, store} from "./redux/redux-store";

export const StoreContext = React.createContext({} as ReduxStoreType)
export type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
    )
}
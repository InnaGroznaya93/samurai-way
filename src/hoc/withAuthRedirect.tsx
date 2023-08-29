import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {AppStateType, ReduxStoreType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect <T>(Component: FC<T>) {
    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T & {}}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent)

    return ConnectedRedirectComponent
};

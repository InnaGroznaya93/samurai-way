import React, {FC} from 'react';
import Header from "./Header";
import {connect, useDispatch} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logoutTC} from "../../redux/auth-reducer";
import {compose} from "redux";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    logoutTC: any
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<HeaderContainerPropsType,any> {

    render() {
        return  <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
    }

};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})
export default compose<FC>(connect(mapStateToProps, {logoutTC})) (HeaderContainer);
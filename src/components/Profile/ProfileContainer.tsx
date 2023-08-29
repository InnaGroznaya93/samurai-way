import React, {FC} from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = {
    getUserProfileTC: any
    getStatusTC: any
    updateStatusTC: any
}

type MapStateToPropsType = {
    profile: ProfileType
    status: null | string
    id: number | null
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
           // userId = "27903"
            userId = "" + this.props.id
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}/>
            </div>
        );
    }
};


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.data.id
    }
}

export default compose<FC>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
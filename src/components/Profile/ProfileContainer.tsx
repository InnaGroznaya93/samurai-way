import React, {FC} from 'react';
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, savePhoto, updateStatusTC, saveProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import { ProfileInfoDataType } from './ProfileInfo/ProfileDataForm';


type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapDispatchToPropsType = {
    getUserProfileTC: any
    getStatusTC: any
    updateStatusTC: any
    savePhoto: any
    saveProfile: (formData: ProfileInfoDataType) => Promise<string>
}

type MapStateToPropsType = {
    profile: ProfileType
    status: null | string
    id: number | null
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "" + this.props.id
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
      this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC} 
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
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
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import { ProfileInfoDataType } from "./ProfileInfo/ProfileDataForm";

type ProfilePropsType = {
    profile: ProfileType
    status: null | string
    updateStatusTC: any
    isOwner: boolean 
    savePhoto: any
    saveProfile: (formData: ProfileInfoDataType) => Promise<string>
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC} isOwner={props.isOwner}
            savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
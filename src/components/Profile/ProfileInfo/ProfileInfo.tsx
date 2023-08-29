import classes from "./ProfileInfo.module.css";
import { ProfileType } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type ProfileInfoPropsType = {
  profile: ProfileType;
  status: null | string;
  updateStatusTC: any;
};
const ProfileInfo = (props: ProfileInfoPropsType) => {
  const { profile, status, updateStatusTC } = props;
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props.status);
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks
          status={status}
          updateStatusTC={updateStatusTC}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;

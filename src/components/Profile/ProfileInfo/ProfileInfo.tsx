import classes from "./ProfileInfo.module.css";
import { ProfileType } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import { ChangeEvent, useState } from "react";
import { ProfileDataForm, ProfileInfoDataType } from "./ProfileDataForm";

export type ProfileInfoPropsType = {
  profile: ProfileType;
  status: null | string;
  updateStatusTC: any;
  isOwner: boolean;
  savePhoto: any;
  saveProfile: (formData: ProfileInfoDataType) => Promise<string>;
};
const ProfileInfo = (props: ProfileInfoPropsType) => {
  const { profile, status, updateStatusTC, isOwner, savePhoto, saveProfile } =
    props;

  const [editMode, setEditMode] = useState(false);
  const [wantToChangePhoto, setWantToChangePhoto] = useState(false)

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = async (formData: ProfileInfoDataType) => {
    const res = await saveProfile(formData);
    if(res) {
      return res;
    }
    setEditMode(false);
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          className={classes.mainPhoto}
        />
        {isOwner && (
          <button onClick={() => setWantToChangePhoto(!wantToChangePhoto)}>change photo</button>  
        )}
        {wantToChangePhoto && (
          <input type={"file"} onChange={(e) => onMainPhotoSelected(e)} />
        )}

        {editMode ? (
          <ProfileDataForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <ProfileStatusWithHooks
          status={status}
          updateStatusTC={updateStatusTC}
          isOwner={isOwner}
        />
      </div>
    </div>
  );
};

type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: any;
};

const ProfileData = (props: ProfileDataPropsType) => {
  const { profile, isOwner, goToEditMode } = props;
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
                // @ts-ignore
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactPropsType = {
  contactTitle: string;
  contactValue: string;
};
const Contact = (props: ContactPropsType) => {
  const { contactTitle, contactValue } = props;
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;

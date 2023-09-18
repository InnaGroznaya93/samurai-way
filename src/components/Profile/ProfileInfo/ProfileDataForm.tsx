import classes from "./ProfileInfo.module.css";
import { FormikHelpers, useFormik } from "formik";
import { ContactsType, ProfileType } from "../../../redux/profile-reducer";
import { useState } from "react";

type PropsType = {
  profile: ProfileType;
  onSubmit: (formData: any) => Promise<void | string>;
};
export type ProfileInfoDataType = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  contacts: ContactsType;
};

export const ProfileDataForm = (props: PropsType) => {
  const { profile, onSubmit } = props;
  let [error, setError] = useState("");
  let [errorFieldName, setErrorFieldName] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: profile.fullName ?? "",
      lookingForAJob: profile.lookingForAJob ?? "",
      lookingForAJobDescription: profile.lookingForAJobDescription ?? "",
      aboutMe: profile.aboutMe ?? "",
      contacts: profile.contacts ?? "",
    } as ProfileInfoDataType,

    onSubmit: (values, formikHelpers: FormikHelpers<ProfileInfoDataType>) => {
      debugger
      let fieldName: string
      onSubmit(values).then((res) => {
        //@ts-ignore
        setError(res);
        if (res) {
          fieldName = res
            .split("Invalid url format (Contacts->")[1]
            .slice(0, -1)
            .toLowerCase();

          setErrorFieldName(fieldName);

          formikHelpers.setFieldError(errorFieldName, res + "");
        }
      }).catch((error) => {
        formikHelpers.setFieldError(fieldName, error);
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <button className={classes.btn} type={"submit"}>Save</button>
      </div>
      <div className={classes.infoBlock}>
        <b>Full name:</b>
        <div>
        <input
          placeholder={"Full name"}
          {...formik.getFieldProps("fullName")}
        />
        </div>
      </div>
      <div>
        <b>Looking for a job:</b>
        <input type={"checkbox"} {...formik.getFieldProps("lookingForAJob")} />
      </div>
      <div>
        <b>My professional skills:</b>
        <textarea
          placeholder={"lookingForAJobDescription"}
          {...formik.getFieldProps("lookingForAJobDescription")}
        />
      </div>
      <div>
        <b>About me:</b>
        <div>
        <textarea
          placeholder={"About me"}
          {...formik.getFieldProps("aboutMe")}
        />
        </div>
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          const { value, ...rest } = formik.getFieldProps("contacts." + key);
          // console.log(errorFieldName === key);
          // console.log("key: ", key);
          // console.log("errorFieldName: ", errorFieldName);
          return (
            <div key={key} className={classes.contact}>
              <b>
                {key}: <div>
                <input placeholder={key} value={value ?? ""} {...rest} />
                </div>
              </b>
              {errorFieldName === key && (
                <div
                  style={{ margin: "10px", color: "red", fontWeight: "bold" }}
                >
                  {error}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </form>
  );
};

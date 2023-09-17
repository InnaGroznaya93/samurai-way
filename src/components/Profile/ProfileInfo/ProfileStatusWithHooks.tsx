import { ChangeEvent, useEffect, useState } from "react";
import { ProfileInfoPropsType } from "./ProfileInfo";

const ProfileStatusWithHooks = (props: Partial<ProfileInfoPropsType>) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if(props.isOwner) {
      setEditMode(true);
    }
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusTC(status);
    setStatus(props.status)
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status: </b>
        
          <span onDoubleClick={activateEditMode}>
            {status || props.status || "----"}
          </span>
         
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={status as string}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

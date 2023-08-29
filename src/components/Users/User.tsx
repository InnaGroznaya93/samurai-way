import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/users-reducer";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"


type PropsType = {
  user: UserType
  followingInProgress: number[]
  followThunkCreator: (userId: number) => any
  unfollowThunkCreator: (userId: number) => any
}

export const User = (props: PropsType) => {
  const {user} = props
    return <div>
    <span>
      <div>
        <NavLink to={"/profile/" + user.id}>
          {" "}
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            className={styles.userPhoto}
          />
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.unfollowThunkCreator(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.followThunkCreator(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </span>
    <span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </span>
    </span>
  </div>
}
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
    return <div className={styles.userCard}>
      <div>
        <NavLink to={"/profile/" + user.id}>
          {" "}
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            className={styles.userPhoto}
          />
        </NavLink>
      </div>

      <div className={styles.userInfo}>
      <div>
        {user.followed ? (
          <button className={styles.btn}
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.unfollowThunkCreator(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button className={styles.btn}
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.followThunkCreator(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
   
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>

        <div className={styles.nameAndStatus}>{user.name}</div>
        <div  className={styles.nameAndStatus}>{user.status}</div>
 
      </div>
      
  </div>
}
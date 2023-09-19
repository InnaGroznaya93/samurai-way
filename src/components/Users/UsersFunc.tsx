import { UsersPropsType } from "./UsersContainer";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";
import s from "./users.module.css"

type UsersFuncPropsType = {
  onPageChanged: (pageNumber: number) => void;
} & UsersPropsType;

export const UsersFunc = (props: UsersFuncPropsType) => {
  const { currentPage, onPageChanged, pageSize, totalUsersCount } = props;

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalItemsCount={totalUsersCount}
        portionSize={10}
      />
      <div className={s.usersBlock}>
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          followThunkCreator={props.followThunkCreator}
          unfollowThunkCreator={props.unfollowThunkCreator}
        />
      ))}
      </div>
    </div>
  );
};

import { UsersPropsType } from "./UsersContainer";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";

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
  );
};

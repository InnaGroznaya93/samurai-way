import React, { FC } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  followAC,
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPageAC,
  setIsFetchingAC,
  setUsersTotalCountAC,
  toggleFollowingProgressAC,
  unfollowAC,
  unfollowThunkCreator,
  UserType,
} from "../../redux/users-reducer";
import { compose, Dispatch } from "redux";
import { UsersFunc } from "./UsersFunc";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../../src/redux/users-selectors";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

export class UsersAPIComponent extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props
    this.props.getUsersThunkCreator(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <UsersFunc
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          users={this.props.users}
          setCurrentPage={this.props.setCurrentPage}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          getUsersThunkCreator={this.props.getUsersThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
        />
      </>
    );
  }
}

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};
type MapDispatchToPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  getUsersThunkCreator: any;
  followThunkCreator: any;
  unfollowThunkCreator: any;
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
let _mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    getUsersThunkCreator:
      (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
        dispatch(setIsFetchingAC(true));

        usersAPI.getUsers(currentPage, pageSize).then((data) => {
          dispatch(setIsFetchingAC(false));
          dispatch(setUsersTotalCountAC(data.totalCount));
        });
      },
    followThunkCreator: (userId: number) => {
      return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.follow(userId).then((response) => {
          if (response.data.resultCode === 0) {
            dispatch(followAC(userId));
          }
          dispatch(toggleFollowingProgressAC(false, userId));
        });
      };
    },
    unfollowThunkCreator: (userId: number) => {
      return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        usersAPI.unfollow(userId).then((response) => {
          if (response.data.resultCode === 0) {
            dispatch(unfollowAC(userId));
          }
          dispatch(toggleFollowingProgressAC(false, userId));
        });
      };
    },
  };
};

// let withRedirect = WithAuthRedirect(UsersAPIComponent)
// export const UsersContainer = connect(mapStateToProps, {
//     follow: followAC,
//     unfollow: unfollowAC,
//     setCurrentPage: setCurrentPageAC,
//     getUsersThunkCreator: getUsersThunkCreator,
//     followThunkCreator: followThunkCreator,
//     unfollowThunkCreator: unfollowThunkCreator
// })(withRedirect)

export default compose<FC>(
  WithAuthRedirect,
  connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    getUsersThunkCreator: getUsersThunkCreator,
    followThunkCreator: followThunkCreator,
    unfollowThunkCreator: unfollowThunkCreator,
  })
)(UsersAPIComponent);

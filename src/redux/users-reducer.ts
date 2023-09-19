import { Dispatch } from "redux";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS ";

export type PhotosType = {
  small: string;
  large: string;
};
export type UserType = {
  id: number;
  uniqueUrlName: string;
  followed: boolean;
  name: string;
  status: string;
  photos: PhotosType;
};
export type InitialStateType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

let initialState: InitialStateType = {
  users: [
    // {id: 1, photoUrl: 'https://interesnoznat.com/wp-content/uploads/1569447105_dmitrij-nagiev-160.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: 2, photoUrl: 'https://pbs.twimg.com/media/D1etrx3XgAMCG4S?format=jpg&name=large', followed: true,fullName: 'Inna', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: 3, photoUrl: 'https://clutch.net.ua/images/2020/12/07/aYZlNbCKhqpOMOXPRTPDRBY5unyiaw1sHbAaQxqY.jpeg', followed: false,fullName: 'Oleg', status: 'And I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: 4, photoUrl: 'https://images.kinorium.com/movie/shot/282447/w1500_189363.jpg', followed: true,fullName: 'Ko', status: 'I am a boss, yo', location: {city: 'Minsk', country: 'Belarus'}},
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage };

    case "SET_USERS_TOTAL_COUNT":
      return { ...state, totalUsersCount: action.totalUsersCount };

    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };

    case "TOGGLE_IS_FOLLOWING_PROGRESS ":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export type ActionTypes =
  | FollowACType
  | UnfollowACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetUsersTotalCountACType
  | SetIsFetchingACType
  | ToggleFollowingProgressACType;

export type FollowACType = ReturnType<typeof followAC>;
export type UnfollowACType = ReturnType<typeof unfollowAC>;
export type SetUsersACType = ReturnType<typeof setUsersAC>;
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
export type SetUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>;
export type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>;
export type ToggleFollowingProgressACType = ReturnType<
  typeof toggleFollowingProgressAC
>;

export const followAC = (userID: number) =>
  ({
    type: FOLLOW,
    userID,
  } as const);
export const unfollowAC = (userID: number) =>
  ({
    type: UNFOLLOW,
    userID,
  } as const);
export const setUsersAC = (users: UserType[]) =>
  ({
    type: SET_USERS,
    users,
  } as const);
export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const);

export const setUsersTotalCountAC = (totalUsersCount: number) =>
  ({
    type: SET_USERS_TOTAL_COUNT,
    totalUsersCount,
  } as const);

export const setIsFetchingAC = (isFetching: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const);

export const toggleFollowingProgressAC = (
  isFetching: boolean,
  userId: number
) =>
  ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  } as const);

export const getUsersThunkCreator = (page: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setUsersTotalCountAC(data.totalCount));
    dispatch(setCurrentPageAC(page));
  };
};

const followUnfollowFlow = async(dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgressAC(true, userId));

    let response = await apiMethod(userId)
      if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
      }
      dispatch(toggleFollowingProgressAC(false, userId));
}

export const followThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {

    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC)
  };
};

export const unfollowThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {

    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowAC)
  };
};

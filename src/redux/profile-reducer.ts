import { PostDataType } from "./store";
import { Dispatch } from "redux";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState: ProfilePageType = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 25 },
    { id: 2, message: `It\'s my first post`, likesCount: 45 },
    { id: 3, message: `Bla-bla`, likesCount: 45 },
    { id: 4, message: `oh, how it's going?`, likesCount: 45 },
  ],
  profile: {
    name: "chrw-user",
    id: 27903,
    uniqueUrlName: null,
    photos: {
      small:
        "https://social-network.samuraijs.com/activecontent/images/users/28018/user-small.jpg?v=1",
      large:
        "https://social-network.samuraijs.com/activecontent/images/users/28018/user.jpg?v=1",
    },
    followed: false,
  },
  status: "",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionTypes
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost: PostDataType = {
        id: new Date().getTime(),
        message: action.newPost,
        likesCount: 0,
      };
      return { ...state, postsData: [...state.postsData, newPost] };
    }

    case "SET_USER_PROFILE":
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case "DELETE-POST":
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPost: string) =>
  ({
    type: ADD_POST,
    newPost,
  } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({
    type: SET_USER_PROFILE,
    profile,
  } as const);

export const setStatusAC = (status: string | null) =>
  ({
    type: SET_STATUS,
    status,
  } as const);

export const deletePostAC = (postId: number) =>
  ({
    type: "DELETE-POST",
    postId,
  } as const);

//thunks
export const getUserProfileTC = (userId: string) => {
  return async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
  // debugger
  let res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data));
};

export const updateStatusTC =
  (status: string | null) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateStatus(status)
      if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
  };

export type SetUserProfileType = ReturnType<typeof setUserProfile>;
export type AddPostActionType = ReturnType<typeof addPostActionCreator>;
export type SetStatusACType = ReturnType<typeof setStatusAC>;
export type DeletePostACType = ReturnType<typeof deletePostAC>;

export type ActionTypes =
  | AddPostActionType
  | SetUserProfileType
  | SetStatusACType
  | DeletePostACType;

export type ProfilePageType = {
  status: null | string;
  postsData: PostDataType[];
  profile: ProfileType;
};

export type ProfileType = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: PhotosType;
  followed: boolean;
};

export type PhotosType = {
  small: string;
  large: string;
};

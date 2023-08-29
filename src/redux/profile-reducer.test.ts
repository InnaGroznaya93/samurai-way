import { addPostActionCreator, profileReducer, ProfilePageType, deletePostAC } from "./profile-reducer";

let initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: `It\'s my first post`, likesCount: 45},
        {id: 3, message: `Bla-bla`, likesCount: 45},
        {id: 4, message: `oh, how it's going?`, likesCount: 45},
    ],
    profile:  {
        name: "chrw-user",
        id: 27903,
        uniqueUrlName: null,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/28018/user-small.jpg?v=1",
            large: "https://social-network.samuraijs.com/activecontent/images/users/28018/user.jpg?v=1"
        },
        followed: false
    },
    status: "",
}

it('length of posts shoud be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com')
   
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(5)
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com')

    let newState = profileReducer(initialState, action)
    expect(newState.postsData[4].message).toBe('it-kamasutra.com')
})

it('after deleting length of messages should be decremented', () => {
    let action = deletePostAC(1)

    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(3)
})
it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    let action = deletePostAC(1000)

    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(4)
})
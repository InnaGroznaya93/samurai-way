import {AddPostActionType} from "./profile-reducer";
import {AddNewMessageActionType, dialogsReducer} from "./dialogs-reducer";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: number
    userName: string
}
export type MessageDataType = {
    id: number
    message: string
}

export type ProfilePageType = {
    postsData: PostDataType[]
    profile: any
}
export type MessagesPageType = {
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}

export type ActionTypes = AddPostActionType | AddNewMessageActionType

export type StoreType = {
    _state: StateType
    _renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}
export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 25},
                {id: 2, message: `It\'s my first post`, likesCount: 45},
                {id: 3, message: `Bla-bla`, likesCount: 45},
                {id: 4, message: `oh, how it's going?`, likesCount: 45},
            ],
            profile: null
        },
        messagesPage: {
            dialogsData: [
                {id: 1, userName: 'Dimych'},
                {id: 2, userName: 'Andrey'},
                {id: 3, userName: 'Inna'},
                {id: 4, userName: 'Sahsa'},
                {id: 5, userName: 'Victor'},
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
        },
        sidebar: {}

    },
    getState() {
        return this._state
    },
    _renderEntireTree() {
        console.log('rendered')
    },
    subscribe(observer: () => void) {
        this._renderEntireTree = observer //observer - pattern
    },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        // this._renderEntireTree()   //need to fix?!!
    }
}

// window.store = store
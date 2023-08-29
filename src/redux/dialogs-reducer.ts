import {ActionTypes, MessagesPageType} from "./store";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export type DialogDataType = {
    id: number
    userName: string
}
export type MessageDataType = {
    id: number
    message: string
}


let initialState = {
    dialogsData: [
        {id: 1, userName: 'Dimych'},
        {id: 2, userName: 'Andrey'},
        {id: 3, userName: 'Inna'},
        {id: 4, userName: 'Sahsa'},
        {id: 5, userName: 'Victor'},
    ] as Array<DialogDataType>,
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as Array<MessageDataType>
}

export type InitialStateType = typeof initialState   //alternative
// let state: InitialStateType
export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case ADD_NEW_MESSAGE:
            let newMessage: MessageDataType = {
                id: new Date().getTime(),
                message: action.newMessage
            }
            return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state
    }
}


export const addNewMessageActionCreator = (newMessage: string) => ({
    type: ADD_NEW_MESSAGE,
    newMessage
}) as const

export type AddNewMessageActionType = ReturnType<typeof addNewMessageActionCreator>
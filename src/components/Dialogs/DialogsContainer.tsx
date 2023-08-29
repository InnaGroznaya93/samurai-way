import React, {FC} from 'react';
import {ActionTypes} from "../../redux/store";
import {addNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType, ReduxStoreType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type DialogsContainerPropsType = {
    dispatch: (action: ActionTypes) => void
    store: ReduxStoreType

}
// const  DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//         (store) => {
//
//             let state = store.getState().dialogsPage
//             const sendMessage = () => {
//                 store.dispatch(addNewMessageActionCreator())
//             }
//
//             const onMessageChange = (messageText: string) => {
//                 store.dispatch(UpDateMessagesDataActionCreator(messageText))
//             }
//
//
//             return <Dialogs dialogsPage={state} upDateMessagesData={onMessageChange} sendMessage={sendMessage}/>
//         }
//     }
//     </StoreContext.Consumer>
// };



export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addNewMessageActionCreator(newMessage))
        }
    }
}

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps ), WithAuthRedirect)(Dialogs);
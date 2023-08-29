import React, {useRef} from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";


//
// type DialogsPropsType = {
//     dialogsPage: MessagesPageType
//     upDateMessagesData: (messageText: string) => void
//     sendMessage: () => void
// }
const Dialogs: React.FC<DialogsPropsType> = (props) => {


    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem id={d.id} name={d.userName} key={d.id}/>)

    let messages = props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    // let textAreaRef = useRef<HTMLTextAreaElement>(null)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messages}</div>
            </div>
            <AddMessageForm {...props}/>
        </div>
    );
};


const AddMessageForm = (props: DialogsPropsType) => {

    type AddMessageErrorsType = {
        message?: string
    }

    const formik = useFormik(
        {
            initialValues: {
                message: '',
            },
            validate: (values) => {
                const errors: AddMessageErrorsType = {}
                if(!values.message) {
                    errors.message = 'enter your message'
                }
                return errors
            },
            onSubmit: values => {
                console.log(JSON.stringify(values))
                props.sendMessage(values.message)
                formik.resetForm()
            }
        })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type={'text'} placeholder={'Enter your message'} {...formik.getFieldProps('message')}></input>
                {formik.touched.message && formik.errors.message && <div style={{color: 'red', margin: '5px'}}>{formik.errors.message}</div>}
            </div>
            <div>
                <button type={'submit'}>send</button>
            </div>
        </form>
    )
}

export default Dialogs;
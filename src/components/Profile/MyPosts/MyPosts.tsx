import React, {KeyboardEvent, useRef} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/store";
import {useFormik} from "formik";

type MyPostsPropsType = {
    postsData: PostDataType[]
    addPost: (newPost: string) => void
}

const MyPosts = React.memo((props: MyPostsPropsType) => {

        let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
        let newPostElement = useRef<HTMLTextAreaElement>(null)

        return (
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <AddNewPostForm addPost={props.addPost}/>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        );
    })


const AddNewPostForm = (props: { addPost: (newPost: string) => void }) => {

    const onEnterAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.code === 'Enter') {
            formik.handleSubmit()
        }
    }

    type FormikErrorsType = {
        newPost?: string
    }

    const formik = useFormik({
        initialValues: {
            newPost: ''
        },
        validate: (values) => {
            const errors: FormikErrorsType = {}
            if(!values.newPost) {
                errors.newPost = `enter your post text`
            }
            return errors
        },
        onSubmit: values => {
            console.log(values)
            props.addPost(values.newPost)
            formik.resetForm()
        }
    })
    return (<div>
        <form action={''} onSubmit={formik.handleSubmit} className={classes.addPostField}>
            <div>
                <textarea {...formik.getFieldProps('newPost')} className={classes.textarea} onKeyDown={onEnterAddPost}/>
                {formik.touched.newPost && formik.errors.newPost && <div style={{color: 'red', margin: '5px'}}>{formik.errors.newPost}</div>}
            </div>
            <div>
                <button className={classes.btn} type={'submit'} disabled={!!formik.errors.newPost}>Add new post</button>
            </div>
        </form>
    </div>)
}

export default MyPosts;
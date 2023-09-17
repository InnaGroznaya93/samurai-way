import {useFormik} from "formik";
import {loginTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"


type LoginErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
const LoginForm = () => {

    const dispatch = useDispatch()
    const loginError = useSelector<AppStateType, string | null>(state => state.auth.error)
    const captchaURL = useSelector<AppStateType, string | null>(state => state.auth.data.captchaURL)
    console.log(captchaURL)

    const formik = useFormik(
        {
            initialValues: {
                email: '',
                password: '',
                rememberMe: false,
                captcha: null
            },
            validate: values => {
                const errors: LoginErrorsType = {}
                if (!values.email) {
                    errors.email = 'Email is required'
                }
                if (!values.password) {
                    errors.password = 'Password is required'
                }
                return errors
            },
            onSubmit: values => {
                // alert(JSON.stringify(values))
                // @ts-ignore
                dispatch(loginTC(values))
                formik.resetForm()
            }
        })

    return (<form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input className={s.field} placeholder={'Email'} {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red', margin: '5px', fontWeight: '500'}}>{formik.errors.email}</div>  : <div style={{ margin: '5px', height: '31px'}}></div>}
            </div>
            <div>
                <input className={s.field} type={'password'} placeholder={'Password'} {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password ?
                    <div style={{color: 'red', margin: '5px', fontWeight: '500'}}>{formik.errors.password}</div> : <div style={{ margin: '5px', height: '31px'}}></div>}
            </div>

            <div className={s.checkbox}>
                <input type={'checkbox'} {...formik.getFieldProps('rememberMe')}/> remember me
            </div>

            {captchaURL && <img src={captchaURL}/>}    
            {captchaURL && <div><input placeholder="Symbols from image" {...formik.getFieldProps('captcha')}/></div>}    

            {loginError ? <div style={{color: 'red', margin: '10px',     fontWeight: '600'}}>{loginError}</div> : <div style={{ margin: '5px', height: '40px'}}></div>}
            <div  className={s.btnWrapper}>
                <button type={'submit'} className={s.btn}>Login</button>
            </div>
           
        </form>
    );
};

const Login = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.login}>
        <h1 className={s.header}>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;
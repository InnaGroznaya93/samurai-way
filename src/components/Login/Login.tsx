import {useFormik} from "formik";
import {loginTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type LoginErrorsType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
const LoginForm = () => {

    const dispatch = useDispatch()
    const loginError = useSelector<AppStateType, string | null>(state => state.auth.error)

    const formik = useFormik(
        {
            initialValues: {
                email: '',
                password: '',
                rememberMe: false
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

    return (<form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={'Email'} {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red', margin: '5px'}}>{formik.errors.email}</div>}
            </div>
            <div>
                <input type={'password'} placeholder={'Password'} {...formik.getFieldProps('password')}/>
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red', margin: '5px'}}>{formik.errors.password}</div>}
            </div>
            <div>
                <input type={'checkbox'} {...formik.getFieldProps('rememberMe')}/> remember me
            </div>
            {loginError && <div style={{color: 'red', margin: '7px'}}>{loginError}</div>}
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    );
};

const Login = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;
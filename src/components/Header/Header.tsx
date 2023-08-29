import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";
import {useDispatch} from "react-redux";

const Header = (props:  HeaderContainerPropsType) => {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(props.logoutTC())
    }

    return (
            <header className={classes.header}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=fa28e44be0bf80ffabac1c15390eef434ebedcfe-7106899-images-thumbs&n=13&exp=1'}/>

                <div className={classes.loginBlock}>
                    {props.isAuth ?
                        <div>{props.login} - <button onClick={props.logoutTC}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
    );
};

export default Header;
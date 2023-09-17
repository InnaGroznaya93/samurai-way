import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";
import {useDispatch} from "react-redux";
import logo from "../../assets/images/logo3.png"

const Header = (props:  HeaderContainerPropsType) => {

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(props.logoutTC())
    }

    return (
            <header className={classes.header}>
                <img
                    src={logo}/>

                <div className={classes.loginBlock}>
                    {props.isAuth &&
                        <div>{props.login} - <button onClick={props.logoutTC}>Logout</button></div>}
                </div>
            </header>
    );
};

export default Header;
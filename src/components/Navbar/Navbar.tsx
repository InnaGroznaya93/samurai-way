import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

const Navbar = () => {

    const isAuth= useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const isDisplay = isAuth ? '' : classes.none

    return (
        <nav className={`${classes.nav} ${!isDisplay ? '' : classes.eclipse}`}>
            <div className={isDisplay}>
            <div className={classes.item}><NavLink to={'/profile'} className = {classes.item} activeClassName={ classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to={'/dialogs'} className = {classes.item} activeClassName={ classes.active}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to={'/news'} className = {classes.item} activeClassName={ classes.active}>News</NavLink></div>
            <div className={classes.item}><NavLink to={'/music'} className = {classes.item} activeClassName={ classes.active}>Music</NavLink></div>
            <div className={classes.item}><NavLink to={'/settings'} className = {classes.item} activeClassName={ classes.active}>Settings</NavLink></div>
            <div className={classes.item}><NavLink to={'/users'} className = {classes.item} activeClassName={ classes.active}>Users</NavLink></div>
            </div>
        </nav>
    );
};

export default Navbar;
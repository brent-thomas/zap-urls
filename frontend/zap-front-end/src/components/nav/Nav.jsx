import React from "react";
import logo from '../../assets/logo.png'
import { Link, useMatch } from 'react-router-dom';
import styles from './nav.module.css'

const Nav = () => {
    return(
        <div className={`pd-vt pd-hz ${styles.container}`}>
            <img src={logo} className={styles.logo} />
            <Link to='/'>About</Link>
        </div>
    )
}



export default Nav
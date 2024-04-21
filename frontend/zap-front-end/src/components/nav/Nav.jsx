import React from "react";
import logo from '../../assets/logo.png'
import { Link, useMatch } from 'react-router-dom';
import styles from './nav.module.css'

const Nav = () => {
    return(
        <div className={`pd-vt pd-hz ${styles.flex}`}>
            <div className={styles.flex}>
                <Link to="/">
                <   img src={logo} className={styles.logo} />
                </Link>
            </div>
            
            <Link to='/about'>About</Link>
        </div>
    )
}



export default Nav
import React from "react";
import styles from './home.module.css'
const Home = () => {
    return(
        <div>
            <div>
                <p className={styles.header}>Hassle-free, ad-free, and cost-free url shortening.</p>
                <div className={styles.form}>
                    <label>Enter your alias(No longer than 10 characters)</label>
                    <input type="text" placeholder="alias"/>
                    <label>Enter the URL you want to shortern.</label>
                    <input type="text" placeholder="Enter Long URL here"/>
                    <button type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Home
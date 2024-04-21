import React, {useState} from "react";
import styles from './home.module.css'
import {isURL} from 'validator';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy, faBoltLightning} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    const [alias, setAlias] = useState('');
    const [errors,seterrors] = useState([])
    const [longURL, setLongURL] = useState('');
    const [zapURL, setzapURL] = useState('')
    const url = "http://localhost:3000/generateurl"


    const validate = () => {
        seterrors([])
        let errorsArr = []
        //check for alias errors
        if(!alias) {
            errorsArr.push('An alias is required')
        } 
        else if(alias.length >10) {
            errorsArr.push('Alias must be 10 characters or less.')
        }
        //check for url errors
        if(!isURL(longURL)) {
            errorsArr.push('Please enter a valid url')
        }

        if(errorsArr.length != 0) {
            seterrors(errorsArr)
            return false
        }
        else{
            return true
        }
    }
 
    const handleSubmit = async (alias,longURL) => {
        if(validate()){
        const data = {
            alias,
            longURL 
        }
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) throw new Error('Network response was not ok.');
        const responseData = await response.json();
        setzapURL(responseData.zapURL)
        }
        else {
            console.log(errors)
           return null
        }
    }

   
    return(
        <div>
            <div>
              
                <div className={styles.form}>
                {zapURL ?
                <div>
                    <Link target="_blank" to={zapURL}>{zapURL}</Link>
                    <div>
                        <button id={styles.copyLink}>
                            <FontAwesomeIcon icon={faCopy}/> Copy URL
                        </button>
                        <button id={styles.generateNewURL} onClick={()=>{
                            setzapURL('')
                        }}>Generate Another URL</button>
                    </div>
                </div>
                :
                    <form>
                        <p className={styles.header}>Zap Your URL - Shorten. Share. Simplify.</p>
                        <div className={styles.error} style={errors.length > 0 ? {display:'block'} : {display:'none'}}>
                        {
                            errors ?
                                errors.map((item,index)=>{
                                    return(
                                        <p  key={index}>
                                            {item}
                                        </p>
                                    )
                                })
                                :
                                null
                        }
                        </div>
                        
                        <div className={styles.flex}>
                      
                            {/* <label>Enter the URL you want to shortern.</label> */}
                            <input 
                                type="text" 
                                placeholder="Enter Long URL here"
                                value={longURL}
                                onChange={e => setLongURL(e.target.value)}
                                className={styles.longURL}
                            />
                            {/* <label>Enter your alias(No longer than 10 characters)</label> */}
                            <input 
                                type="text" 
                                placeholder="alias"
                                value={alias} 
                                onChange={e => setAlias(e.target.value)} 
                                className={styles.alias}
                                maxLength={15}
                            />
                        </div>
                        <button type="button" id={styles.submit} onClick={()=>{handleSubmit(alias, longURL)}}>
                            ZAP <FontAwesomeIcon icon={faBoltLightning}/>

                            </button>
                    </form>
                }
                    <div>
                    </div>
                </div>
                
                <p className={styles.header}>Hassle-free, ad-free, and cost-free url shortening.</p>
                <div className={styles.featureContainer}>
                <div className={styles.feature}>
                        <h3>Streamlined URL Shortening </h3>
                        <p>Focuses on lean, efficient URL shortening, cutting out all but the most essential
                        features for quick and easy link reduction.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>No sign in or registration required</h3>
                        <p>We'll likely add this feature later, but it will always be optional.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Free</h3>
                        <p>Free means free. No ads and no features hidden behind paywalls.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
import React, {useState} from "react";
import styles from './home.module.css'
import {isURL} from 'validator';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopy, faBoltLightning} from '@fortawesome/free-solid-svg-icons'
import Loader from "../../components/loader/Loader";
import CopyButton from "../../components/copybutton/CopyButton";
const Home = () => {
    const [alias, setAlias] = useState('');
    const [errors,seterrors] = useState([])
    const [longURL, setLongURL] = useState('');
    const [zapURL, setzapURL] = useState('')
    const [loading, setLoading] = useState(false);
    const url = import.meta.env.VITE_API_URL;


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
        setLoading(true)
        try{
            if(validate()){
                const data = {
                    alias,
                    longURL 
                }
                const response = await fetch(`${url}/api/generateurl`, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                const responseData = await response.json();
                if(responseData.error) {
                    seterrors([responseData.error])
                    throw new Error('Network response was not ok');
                }
                setzapURL(responseData.zapURL)
                setLongURL('')
                setAlias('')
                }
        } catch(err) {
            if(errors.length === 0){
                seterrors(['There appears to be an issue with our server. Please try again in a few moments.'])
            }
            console.log(err)
        }
        setLoading(false)
    }   

   
    return(
        <div>
            <div>
              
                <div className={styles.form}>
                {loading ? 
                <Loader/>
                :
                zapURL  && !loading ?
                <div>
                    <p className={styles.header}>Success! Your ZapURL:</p>
                    <Link className={styles.zapURL} target="_blank" to={zapURL}>{zapURL}</Link>
                    <div>
                        <CopyButton url={zapURL}/>
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
                        <p>We'll likely add this feature later to implement link tracking, but it will always be optional.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Free</h3>
                        <p>Free means free. No ads and no features hidden behind paywalls.</p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Transparent Redirection</h3>
                        <p>
                            Our shortened URLs are designed to redirect you transparently to the intended destination. There are no intermediate pages filled with ads, no unexpected detours—just a 
                            straightforward, secure redirection from ZapURLs.com to where you want to go.
                        </p>
                    </div>
                    <div className={styles.feature}>
                    <h3>Privacy Matters</h3>
                    <p>
                        We respect your privacy. ZapURLs.com does not track personal data from
                        the URLs that are shortened. Our process is transparent—we focus solely
                        on providing you with a reliable and efficient service.
                    </p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Open Source</h3>
                        <p>
                            ZapURLs is fully open-source, inviting developers worldwide to contribute and
                            improve our services. Engage with us on <Link target="_blank" to="https://github.com/brent-thomas/zap-urls" className={styles.github}>GitHub</Link> to 
                            enhance URL shortening for everyone.
                            </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
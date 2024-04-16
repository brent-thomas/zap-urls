import React, {useState} from "react";
import styles from './home.module.css'
const Home = () => {
    const [alias, setAlias] = useState('');
    const [longURL, setLongURL] = useState('');
    const [zapURL, setzapURL] = useState('')
    const url = "http://localhost:3000/generateurl"
    const handleSubmit = async (alias,longURL) => {
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
    return(
        <div>
            <div>
                <p className={styles.header}>Hassle-free, ad-free, and cost-free url shortening.</p>
                <div className={styles.form}>
                    <form>
                        <label>Enter your alias(No longer than 10 characters)</label>
                        <input 
                            type="text" 
                            placeholder="alias"
                            value={alias} 
                            onChange={e => setAlias(e.target.value)} 
                        />
                        <label>Enter the URL you want to shortern.</label>
                        <input 
                            type="text" 
                            placeholder="Enter Long URL here"
                            value={longURL}
                            onChange={e => setLongURL(e.target.value)}
                        />
                        <button type="button" onClick={()=>{handleSubmit(alias, longURL)}}>Submit</button>
                    </form>
                    <p className={styles.url_example}>Sample URL: https://zapurls.com/alias/f4h3h2</p>
                    <div>
                        <p>Your ZAP URL: {zapURL}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";
const Privacy = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <div style={{maxWidth:'700px', margin:'2em auto',}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ZAPURLS.com Privacy Statement</title>
        </Helmet>
        <h3>Privacy Statement:</h3>
        <p>
            At ZapURLs.com, we take your privacy seriously. We collect minimal personal information
            necessary to provide our services and enhance your user experience. This may include your 
            IP address, browser type, and usage data. We do not sell, rent, or share your personal 
            information with third parties for marketing purposes. Any data collected is used solely for 
            improving our services, ensuring the security of our platform, and complying with legal 
            obligations. We employ industry-standard security measures to protect your data and regularly 
            review our practices to maintain your trust. By using ZapURLs.com, you consent to the 
            collection and use of your information as outlined in this Privacy Statement.
        </p>
    
    </div>
  )
}

export default Privacy
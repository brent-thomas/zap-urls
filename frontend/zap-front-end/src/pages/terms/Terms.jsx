import React, {useEffect} from 'react'

const Terms = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <div style={{maxWidth:'700px', margin:'2em auto',}}>
        <h3>Terms Of Use</h3>
        <p>
        Welcome to ZapURLs.com! By accessing or using our services, you agree to abide by these 
        Terms of Use. You may use our platform for lawful purposes only and must not engage in any 
        activity that violates applicable laws or infringes upon the rights of others. While we strive 
        to provide accurate and up-to-date information, we make no warranties or representations 
        regarding the accuracy, completeness, or reliability of our services. ZapURLs.com reserves the 
        right to suspend or terminate your access to the platform at any time for violating these Terms or 
        for any other reason deemed necessary. By using ZapURLs.com, you agree to indemnify and hold 
        harmless our company and its affiliates from any liabilities arising from your use of our services.
        </p>
    
    </div>
  )
}

export default Terms
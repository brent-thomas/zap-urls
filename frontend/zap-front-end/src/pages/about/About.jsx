import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.container}>
        <h2>Who are we? </h2>
        <p>
        ZapURLs.com provides a streamlined URL shortening service, turning unwieldy web addresses into short, friendly links
        perfect for sharing via text, email, or social media. Our platform serves anyone looking to declutter their digital
        communications, whether for personal sharing or professional branding.

        </p>
        <p>
        If you've received a link that looks like zapurls.com/alias/4jdj2j, rest assured it's valid. The sender used our service to
        compress their original link for a neater, more user-friendly appearance. Our links are simply a gateway, 
        redirecting you safely to the intended website without any detours or surprises.
        </p>

        <h2>Why ZapURLs.com?</h2>
        <p>
        Frustrated by existing URL shorteners laden with ads, riddled with restrictions, and demanding payment for basic functionalities,
        we saw the need for change. The market's "free" services came at the cost of user convenience, 
        most requiring account registration and navigating through a barrage of ads that bog down our browsers.
        </p>

        <p>
        We believe that URL shortening is a fundamental task that should be accessible, ad-free, and uncomplicated. 
        That's the vision behind ZapURLs.com—a no-nonsense platform that provides what you need without the clutter. 
        Simple, effective, and truly free, our service is designed with the user in mind, ensuring that you can shorten URLs 
        and get on with your day, hassle-free.
        </p>

        <p>Welcome to a cleaner, more efficient way to shorten URLs. Welcome to ZapURLs.com.</p>
    </div>
  )
}

export default About
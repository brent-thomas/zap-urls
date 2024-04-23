import React from 'react'
import styles from './about.module.css'
import {Helmet} from "react-helmet";
const About = () => {
  return (
    <div className={styles.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About ZAPURLS.com</title>
        </Helmet>
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

        <h2>When ZapURLs Might Not Be the Best Fit</h2>
        <p>
          While ZapURLs.com is perfect for many use cases, it's important to recognize scenarios where it might
          not meet specific needs:
        </p>

        <h4>Large Commercial Projects:</h4>
        <p>
        For businesses or projects that require heavy-duty URL shortening capabilities, including extensive tracking 
        analytics, and branded domains, ZapURLs might not be the best fit. Our service is designed for simplicity and ease of use, 
        without complex analytics or enterprise-grade features.
        </p>

        <h4>Link Tracking and Data Analytics:</h4>
        <p>
        If you need detailed insights into click-through rates, geographic data, or other analytical metrics, 
        ZapURLs currently does not support these features. Our focus is on providing straightforward URL 
        shortening without the complications of extensive tracking.
        </p>

        <h4>High Volume Needs:</h4>
        <p>
        ZapURLs is rate-limited to 50 URLs per 15 minutes to ensure quality service for all users. 
        For applications that require higher volumes of URL shortening within short periods, this limit may prove 
        restrictive.
        </p>

        <p>
        We encourage users who require these features to consider other URL shortening services that specialize in these areas.
        ZapURLs is ideal for individuals, small businesses, and projects that benefit from simple, no-cost URL shortening for 
        easier sharing and handling.
        </p>
    </div>
  )
}

export default About
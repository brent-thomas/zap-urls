import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link to="/privacy">Privacy</Link>
      <Link to="/terms">Terms of Use</Link> 
      <Link target="_blank" to="https://ko-fi.com/zapurls">Donate</Link>
     
    </div>
)}






export default Footer
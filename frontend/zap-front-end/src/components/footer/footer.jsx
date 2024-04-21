import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Donate</Link>
      <Link to="/">Developers</Link>
      <Link to="/">Privacy</Link>
      <Link to="/">Terms of Use</Link> 
      <Link to="/">Contact</Link> 
    </div>
)}






export default Footer
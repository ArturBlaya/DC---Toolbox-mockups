import React from 'react'
import styles from './navbar.module.css';
import clear_logo from '../img/data-crafts-clear-brand.png';

export function Navbar() {
  return <nav className={styles.nav}>  
    
    <img src={clear_logo} alt="clear_logo" className={styles.clear_logo} /> 
    
    <div className={styles.links}>
      <a className={styles.a} href="../public/index.html">Home</a>
      <a className={styles.a}> 
        Services ▼
        <div className={styles.dropdown}>
          <a className={styles.a} href="../public/index.html">Digital Analytics</a>
          <a className={styles.a} href="../public/index.html">Business Intelligense</a>
          <a className={styles.a} href="../public/index.html">Data Engineering</a>
        </div>
      </a>
      <a className={styles.a} href="../public/index.html">Toolbox</a>
      
      <a className={styles.a}> 
        Login ▼
        <div className={styles.dropdown}>
          <a className={styles.a} href="http://localhost:3030/oauth/google">Google</a>
          <a className={styles.a} href="http://localhost:3030/oauth/github">Github</a>
        </div>
      </a>
      
    </div>
    <a className={styles.button} href="../public/index.html">Contact</a>
  </nav>
}

import React from 'react'
import styles from './footer.module.css';
import logo from '../img/full_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faLinkedin   } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return <div className={styles.footer}> 
    <div className={styles.icons}>
      <img src={logo} alt="Data Crafts Logo" className={styles.img}/>
      <div className={styles.brands}>
        <a href=""><FontAwesomeIcon icon={faFacebook} className={styles.a}/></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} className={styles.a}/></a>
        <a href=""><FontAwesomeIcon icon={faLinkedin} className={styles.a}/></a>
      </div>
    </div>
    <hr className={styles.hr}/>
    <div>© Copyright 2022. All rights reserved.</div>
  </div>
}

import styles from './footer.module.css';
import logo from '../img/full_logo.png';

export function Footer() {
  return <div className={styles.footer}> 
    <div><img src={logo} alt="Data Crafts Logo"/></div>
    <div><hr /></div>
    <div>© Copyright 2022. All rights reserved.</div>
  </div>
}

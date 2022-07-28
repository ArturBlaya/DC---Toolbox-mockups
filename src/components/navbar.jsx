import styles from './navbar.module.css';
import clear_logo from '../img/data-crafts-clear-brand.png';

export function Navbar() {
  return <nav className={styles.nav}>  
    <div className={styles.img_div}>
      <img src={clear_logo} alt="clear_logo" className={styles.clear_logo} /> 
    </div>
    <div className={styles.buttons}>
      <a className={styles.a} href="../public/index.html">Home</a>
      <button className={styles.a}> 
        Services ▼
        <div className={styles.dropdown}>
          <a className="" href="../public/index.html">Digital Analytics</a>
          <a className="" href="../public/index.html">Business Intelligense</a>
          <a className="" href="../public/index.html">Data Engineering</a>
        </div>
      </button>
      <a className={styles.a} href="../public/index.html">Toolbox</a>
      <a className={styles.a} href="http://localhost:3030/oauth/google">Login</a>
    </div>
    <a className={styles.button} href="../public/index.html">Contact</a>
  </nav>
}

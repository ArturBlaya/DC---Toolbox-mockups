import styles from './options.module.css';

import sdr from '../img/sdr.png';
import manage from '../img/manage.png';
import audit from '../img/audit.png';

export function Options() {
  return <div className={styles.container}>
    <div className={styles.col}>
      <img src={sdr} alt="sdr" className={styles.img}/>
      <h1>Google Analytics Automatic SDR</h1>
      <p className={styles.p}>Automatically generate a Solutions Design Reference for your Google Analytics implementation.</p>
      <a className={styles.a} href="/automatic_sdr">→</a>
    </div>
    <div className={styles.col}>
      <img src={manage} alt="manage" className={styles.img}/>
      <h1>Manage Google Analytics</h1>
      <p className={styles.p}>Copy your variable definitions from one Report Suite to another with minimum effort to keep them consistent.</p>
      <a className={styles.a} href="/manage">→</a>
    </div>
    <div className={styles.col}>
    <img src={audit} alt="audit" className={styles.img}/>
      <h1>Google Analytics Audit</h1>
      <p className={styles.p}>Copy your variable definitions from one Report Suite to another with minimum effort to keep them consistent.</p>
      <a className={styles.a} href="/audit">→</a>
    </div>
  </div>
}


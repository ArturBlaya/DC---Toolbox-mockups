import styles from './sdr.module.css';

export function Sdr() {
  return <div className={styles.container}>
    <h2 className={styles.h2}>GENERATE SDR</h2>
    
    <h1 className={styles.h1}>Connect to a Report Suite</h1>
    
    <div className={styles.generate_report_div}>
      <select name="" id="">
        <option value="">Generate Suite 1</option>
        <option value="">Generate Suite 2</option>
        <option value="">Generate Suite 3</option>
        <option value="">Generate Suite 4</option>
      </select>
      <button className={styles.button}>
        Generate SDR
      </button>
    </div>
  
  </div>
}



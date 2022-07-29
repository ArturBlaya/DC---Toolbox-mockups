import styles from './with_sdr.module.css';

export function With_sdr() {
  return <div className={styles.container}>
    

    <div className={styles.report_suite_options}>
      <select name="" id="">  
        <option value="">Report Suite Name: report_suite_id</option>
        <option value="">Report Suite Name: report_suite_id</option>
        <option value="">Report Suite Name: report_suite_id</option>
        <option value="">Report Suite Name: report_suite_id</option>
      </select>
      <button className={styles.button}>Add New</button>
      <button className={styles.button}>Compare</button>
      <button className={styles.button}>Audit</button>
    </div>

    <div className={styles.table_div}>
      <div className={styles.table_buttons_div}>
        <button className={styles.button}>eVars</button>
        <button className={styles.button}>props</button>
        <button className={styles.button}>events</button>
      </div>
      <div className={styles.search_div}>
        <input type="text" name="" id="" value="Search props …"/>
        <button className={styles.button}>Push Changes</button>
      </div>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>

  </div>
}



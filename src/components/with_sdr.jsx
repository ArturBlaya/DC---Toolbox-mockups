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

      <div className={styles.scroll_div}>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Allocation</th>
            <th>Expiration</th>
            <th>Status</th>
            <th>Merchandising</th>
            <th>binding Event</th>
          </tr>
          <tr>
            <td>eVar Name</td>
            <td>text</td>
            <td>last</td>
            <td>vist</td>
            <td>subrelations</td>
            <td>no</td>
            <td>event</td>
          </tr>
          <tr>
            <td>eVar Name</td>
            <td>text</td>
            <td>last</td>
            <td>vist</td>
            <td>subrelations</td>
            <td>no</td>
            <td>event</td>
          </tr>
          <tr>
            <td>eVar Name</td>
            <td>text</td>
            <td>last</td>
            <td>vist</td>
            <td>subrelations</td>
            <td>no</td>
            <td>event</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
}



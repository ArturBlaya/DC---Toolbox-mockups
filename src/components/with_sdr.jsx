import styles from './with_sdr.module.css';
import React,{useState} from 'react';
import EVars from './eVars';
import Props from './props';
import Events from './events';


export function With_sdr() {
  const [state, setState] = useState("");
  
  function updateState(text) {
    if (text==="eVars") {
      setState(<EVars/>)
    }
    else if (text==="props") {
      setState(<Props/>) 
    }
    else if (text==="events") {
      setState(<Events/>)
    }
    
  }

  
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
        <button className={styles.button} onClick={() => updateState("eVars")}   >eVars</button>
        <button className={styles.button} onClick={() => updateState("props")}   >props</button>
        <button className={styles.button} onClick={() => updateState("events")}  >events</button>
      </div>
      <div className={styles.search_div}>
        <input type="text" name="" id="" value="Search props …"/>
        <button className={styles.button}>Push Changes</button>
      </div>

      {state}
      
    </div>

  </div>
}



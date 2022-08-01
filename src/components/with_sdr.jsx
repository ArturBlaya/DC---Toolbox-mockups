import styles from './with_sdr.module.css';
import React,{useState} from 'react';
import EVars from './eVars';
import Props from './props';
import Events from './events';



export function With_sdr() {
  const [state, setState] = useState("");
  
  function updateState(text) {
    if (text==="eVars") {
      document.getElementById("eVars").className = styles.button_clicked;
      document.getElementById("props").className = styles.button;
      document.getElementById("events").className = styles.button;
      setState(<EVars/>)
    }
    else if (text==="props") {
      document.getElementById("eVars").className = styles.button;
      document.getElementById("props").className = styles.button_clicked;
      document.getElementById("events").className = styles.button;
      setState(<Props/>) 
    }
    else if (text==="events") {
      document.getElementById("eVars").className = styles.button;
      document.getElementById("props").className = styles.button;
      document.getElementById("events").className = styles.button_clicked;
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
        <button id="eVars" className={styles.button} onClick={() => updateState("eVars")}   >eVars</button>
        <button id="props" className={styles.button} onClick={() => updateState("props")}   >props</button>
        <button id="events" className={styles.button} onClick={() => updateState("events")}  >events</button>
      </div>
      <div className={styles.search_div}>
        <input type="text" name="" id="" value="Search props …"/>
        <button className={styles.button}>Push Changes</button>
      </div>

      {state}
      
    </div>

  </div>
}



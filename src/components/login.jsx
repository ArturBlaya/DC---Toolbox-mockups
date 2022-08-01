import React,{useState} from 'react';
import styles from "./login.module.css"

export default function Login(props) {
  
  function updateState() {
    // Inici de Sessió
    setState(<button className={styles.button}>Hi, User!</button>)
  }

  const [state, setState] = useState(<button className={styles.button}> 
    Login ▼ 
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => updateState()}> Google</button>
      <button className={styles.button} onClick={() => updateState()}>Github </button>
    </div>
  </button>);

  return <div>{state}</div>
}

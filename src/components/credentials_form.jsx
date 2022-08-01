import React from 'react'
import styles from './credentials_form.module.css';

export function Credentials_form() {
  return <div className={styles.container}>
    
    <p className={styles.p}> Follow <a href="https://developer.adobe.com/analytics-apis/docs/2.0/guides/">Adobe’s guide</a> to create a project in the <a href="https://developer.adobe.com/console/home">Adobe Developer Console</a>.
      In the Authentication section, use the JWT method as explained in the <a href="https://developer.adobe.com/developer-console/docs/guides/credentials/#generate-jwt">Generate JWT</a> section of the linked article. 
      Go to the new service account, generate a keypair and download the private key (.key file) and the certificate (.pem file) 
      With that information, fill the following fields:
    </p>
    
      <form action="" className={styles.form}>
        <label>Client Id</label>
        <input type="text" name="Client Id" id="" />
        <label>Client Secret</label>
        <input type="text" name="" id="" />
        <label>Technical Account Id</label>
        <input type="text" name="" id="" />
        <label>Technical Account Email</label>
        <input type="text" name="" id="" />
        <label>Organisation Id</label>
        <input type="text" name="" id="" />
        <label>Private Key</label>
        <input type="text" name="" id="" />
        <label>Certificate</label>
        <input type="text" name="" id="" />
      </form>
    
  </div>
}



import React from 'react'
import styles from "./eVars.module.css"

export default function EVars() {
  return (
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
  )
}

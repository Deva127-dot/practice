import React from 'react';
import styles from './props.module.css'

function Props(props) {
  return (
    <div className={styles.main}>
      <p>{props.id} </p>
      <p>{props.fName}  </p>
      <p>{props.lName} </p>
      <p>{props.email} </p>
      <p>{props.gender} </p>
    </div>
  )
}

export default Props

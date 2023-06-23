import React from 'react';
import styles from './props.module.css';

function Props(props) {
  return (
    <div className={styles.main} >
      <p> {props.index} </p>
      <p> {props.id} </p>
      <img src={props.img} alt="img" className={styles.img} />
      <p> {props.f_name} </p>
      <p> {props.l_name} </p>
      <p> {props.email} </p>
      <p> {props.gender} </p>
    </div>
  )
}

export default Props

    // "id": 1,
    // "image": "http://dummyimage.com/181x100.png/dddddd/000000",
    // "first_name": "Evania",
    // "last_name": "Kift",
    // "email": "ekift0@zdnet.com",
    // "gender": "Female"
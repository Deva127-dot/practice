import React, { useState } from "react";
import styles from "./conditional.module.css";

function Conditional() {
  const [count, setCount] = useState(0);

  const decValue = () => {
    if (count <= 0) {
      alert("the value is already zero");
    } else {
      setCount(count - 1);
    }
  };
  const incValue = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.main}>
      <button onClick={incValue} className={styles.btn}>
        +
      </button>
      <br />
      <p className={styles.para} > {count} </p>
      <br />
      <button onClick={decValue} className={styles.btn}>
        -
      </button>
    </div>
  );
}

export default Conditional;

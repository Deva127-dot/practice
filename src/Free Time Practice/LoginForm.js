import React, { useState } from "react";
import styles from "./loginForm.module.css";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    {/* <h1 className={styles.txt} >Login Form</h1> */}
    <div className={styles.main}>
      <form action="" className={styles.form}>
        <label htmlFor="">Email:</label>
        <input
          type="Email"
          placeholder="Enter your Email"
          className={styles.inputBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <form action="">
        <label htmlFor="">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.inputBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn} type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default LoginForm;
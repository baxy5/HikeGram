import React from "react";
import styles from "../styles/Register.module.scss";
import logo from "../styles/Navbar.module.scss";
import Link from "next/link";

export const Login = () => {
  return (
    <div className={styles.register}>
      <div className={logo.navbar}>
        <Link href="/">
          <a className={logo.logo}>
            Hike<span>gram</span>
          </a>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Log in</h1>
          <form method="post">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
            <div>
              <button type="submit">Log in</button>
            </div>
          </form>
          <Link href="/register">
            <a className={styles.linking}>
              Sign up if you don't have an account.
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

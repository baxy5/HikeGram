import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "../styles/Register.module.scss";
import logo from "../styles/Navbar.module.scss";

export const Login = () => {
  interface User {
    email: String;
    password: String;
  }

  const router = useRouter();

  let [isLoading, setLoading] = useState(false);

  const userVerification = async (e) => {
    e.preventDefault();

    const userData: User = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      setTimeout(() => {
        setLoading(true);
      }, 100);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      router.reload()
    }
  };

  useEffect(() => {
    router.prefetch("/");
  });

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
        {isLoading ? (
          < ClipLoader />
        ) : (
          <div className={styles.box}>
            <h1>Log in</h1>
            <form method="post" onSubmit={userVerification}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
              <div>
                <button type="submit" >
                  Log in
                </button>
              </div>
            </form>
            <Link href="/register">
              <a className={styles.linking}>
                Sign up if you don't have an account.
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

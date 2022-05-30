import Link from "next/link";
import { useState } from "react";
import logo from "../styles/Navbar.module.scss";
import styles from "../styles/Register.module.scss";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    setUserData({ email: email, password: password });

    try {
      let response = await axios
        .post("/api/register", userData)
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  // get sign up data
  // store data in state
  // useEffect send data to api

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
          <h1>Sign up</h1>
          <form method="post" onSubmit={getUserData}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              required
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

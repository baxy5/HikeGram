import Link from "next/link";
import logo from "../styles/Navbar.module.scss";
import styles from "../styles/Register.module.scss";

const Register = () => {
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
          <form action="/api/register" method="post">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
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

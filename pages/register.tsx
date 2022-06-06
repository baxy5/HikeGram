import Link from "next/link";
import logo from "../styles/Navbar.module.scss";
import styles from "../styles/Register.module.scss";

const Register = () => {
  interface User {
    email: string;
    password: string;
  }

  const sendData = async (e) => {
    e.preventDefault();

    const userData: User = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);
  };

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
          {/* Action: it defines where to send the data also after submitting, this redirect to the API url in this case */}
          <form method="post" onSubmit={sendData}>
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

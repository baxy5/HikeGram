import Link from "next/link";
import { useRef } from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  let menu = useRef("");

  // Need refactor:
  const openMenu = () => {
    if (menu.current.style.transform == "translate(100%)") {
      menu.current.style.transform = "translate(0%)";
    } else {
      menu.current.style.transform = "translate(100%)";
    }
  };

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>
          Hike<span>gram</span>
        </a>
      </Link>
      <svg
        onClick={openMenu}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 20.25V22.5H5.625V20.25H18ZM23.625 12.375V14.625H3.375V12.375H23.625ZM21.375 4.5V6.75H9V4.5H21.375Z"
          fill="black"
        />
      </svg>
      <div className={styles.nav} ref={menu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className={styles.sign_up}>
              Sign up
            </a>
          </li>
        </ul>

        <svg
          onClick={openMenu}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3.5C19.799 3.5 24.5 8.20101 24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20101 24.5 3.5 19.799 3.5 14C3.5 8.20101 8.20101 3.5 14 3.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.0002 14L18.6668 9.33334M14.0002 14L18.6668 18.6667L14.0002 14ZM14.0002 14L9.3335 9.33334L14.0002 14ZM14.0002 14L9.3335 18.6667L14.0002 14Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;

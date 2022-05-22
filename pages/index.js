import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const nav = useRef("");

  const openMenu = () => {
    nav.current.classList.add("open-menu");
  };

  const closeMenu = () => {
    nav.current.classList.remove("open-menu");
  };

  return (
    <>
      <Head>
        <title>Hikegram</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>
              <a href="#">
                Hike<span>gram</span>
              </a>
            </h1>
            <nav ref={nav}>
              <ul>
                <li>
                  <Link href="/Home">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>

              <svg
                className="close"
                onClick={closeMenu}
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
            </nav>
            <div className={styles.register}>
              <p>Login</p>
              <p>Sign up</p>
            </div>

            <svg
              className="menu"
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
          </div>

          <section className={styles.hero}>
            <div className="content">
              <h1>
                Hike<span>gram</span>
              </h1>
              <p>
                Hikegram is a photo sharing website for wild hikers all around
                the world. Share your photos. Find friends. Hike together.
              </p>
            </div>

            <svg
              className="indicator"
              viewBox="0 0 45 133"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_45_68)">
                <path
                  d="M44.8241 99.9809C44.4725 99.006 43.9061 98.5185 43.1249 98.5185H29.9999V2.46297C29.9999 1.7446 29.8241 1.15453 29.4725 0.692719C29.121 0.230911 28.6717 0 28.1249 0H16.8749C16.328 0 15.8788 0.230911 15.5272 0.692719C15.1756 1.15453 14.9999 1.7446 14.9999 2.46297V98.5185H1.87486C1.05455 98.5185 0.488142 99.006 0.175642 99.9809C-0.136858 100.956 -0.039202 101.854 0.46861 102.675L20.9764 132.23C21.367 132.743 21.8163 133 22.3241 133C22.871 133 23.3397 132.743 23.7303 132.23L44.5311 102.675C45.0389 101.854 45.1366 100.956 44.8241 99.9809Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_45_68">
                  <rect width="45" height="133" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </section>

          <section className={styles.coming_soon}>
            <p className="title">Coming soon</p>
          </section>
        </div>
      </div>
    </>
  );
}

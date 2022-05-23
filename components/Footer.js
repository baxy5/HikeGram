import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.text}>
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5 1.20697L40.1334 12.0774V30.9228L21.5 41.7961L2.8667 30.9228V12.0774L21.5 1.2041V1.20697ZM21.5 11.4668C18.839 11.4668 16.287 12.5238 14.4054 14.4055C12.5238 16.2871 11.4667 18.8391 11.4667 21.5001C11.4667 24.1611 12.5238 26.7131 14.4054 28.5947C16.287 30.4764 18.839 31.5334 21.5 31.5334H22.0218C24.8196 31.5334 27.5057 30.4212 29.4866 28.4432L29.6815 28.2482L27.6519 26.2186L27.457 26.4136C26.0156 27.8556 24.0606 28.6661 22.0218 28.6668H21.5C19.5993 28.6668 17.7764 27.9117 16.4324 26.5677C15.0884 25.2237 14.3334 23.4008 14.3334 21.5001C14.3334 19.5994 15.0884 17.7765 16.4324 16.4325C17.7764 15.0885 19.5993 14.3334 21.5 14.3334H22.0218C24.06 14.3334 26.015 15.1447 27.457 16.5866L27.6519 16.7816L29.6815 14.752L29.4866 14.557C28.5062 13.577 27.3424 12.7996 26.0615 12.2694C24.7807 11.7392 23.408 11.4664 22.0218 11.4668H21.5Z"
            fill="black"
          />
        </svg>
        <h1>adaptics</h1>
      </div>
    </div>
  );
};

export default Footer;

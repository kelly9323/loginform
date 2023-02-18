import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.scss'
const Header = () => {
  const {pathname} = useLocation();
  return (
    <header>
      <Link to="/">
        <img src="/logo.png" alt="logo" />
      </Link>
      {pathname === "/" || pathname === "/signup" ? (
        <Link className={styles.buttonLogIn} to="/login">
          Login
        </Link>
      ) : (
        <Link className={styles.buttonLogIn} to="/signup">
          Signup
        </Link>
      )}
    </header>
  );
};

export default Header;

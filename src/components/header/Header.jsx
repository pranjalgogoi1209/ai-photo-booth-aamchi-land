import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "./../../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(true);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    showNavbar && (
      <div className={`flex-row-center ${styles.Header}`}>
        <Link to={"/"} className={`imgContainer ${styles.imgContainer}`}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
    )
  );
}

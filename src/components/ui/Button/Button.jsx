import React from "react";
import styles from "./Button.module.css";

const Button = ({ variant = "primary", children }) => {
  return (
    <div>
      <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
    </div>
  );
};

export default Button;

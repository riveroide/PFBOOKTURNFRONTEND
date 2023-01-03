import React from "react";
import styles from "./RegisterButtomBusiness.module.css";

const RegisterButtomBusiness = () => {
  return (
    <div className="">
      <button className={styles.button}>
        <p>Registrate</p>
        <svg
          strokeWidth="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default RegisterButtomBusiness;

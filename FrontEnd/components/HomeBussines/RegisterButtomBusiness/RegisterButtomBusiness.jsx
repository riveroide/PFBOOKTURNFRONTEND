import React from "react";
import styles from "./RegisterButtomBusiness.module.css";
import Link from "next/link";

const RegisterButtomBusiness = () => {
  return (
    <div className="mt-0">
      <Link href="/business/login/createform">
      <button className={styles.button}>
        <p>Registrate</p>
        <svg
          stroke-width="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      </Link>
    </div>
  );
};

export default RegisterButtomBusiness;

import React from "react";
import styles from "./FeaturesList.module.css";

const FeaturesList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.listCont}>
        <div className={styles.listInfo}>
          <h1>Las soluciones más eficientes para tu negocio</h1>
          <div className={styles.list}>
            <ul className={styles.features}>
              <li>
                <div className={styles.xd}><p>f1</p></div>
                <div className={styles.desplegable}><p>asfas</p></div>
              </li>
              <li>
                <p>f2</p>
              </li>
              <li>
                <p>f3</p>
              </li>
              <li>
                <p>f4</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
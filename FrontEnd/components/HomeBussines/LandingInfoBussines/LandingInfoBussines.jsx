import React from 'react'
import styles from "./LandingInfoBussines.module.css"

const LandingInfoBussines = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </div>
      <div className={styles.prueba}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus neque officia blanditiis? Exercitationem mollitia doloribus accusamus? Explicabo ab, est corrupti minima reiciendis a, voluptates itaque, tempora eveniet reprehenderit nemo obcaecati.
        </p>
        </div>
    </div>
  )
}

export default LandingInfoBussines
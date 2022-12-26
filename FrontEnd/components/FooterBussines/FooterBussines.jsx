import React from "react";
import Link from "next/link";
import styles from "./FooterBussines.module.css";
import Image from "next/image";

const FooterBussines = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.links}>
            <ul>
              <li>Blog</li>
              <li>Quiénes somos</li>
              <li>Preguntas frecuentes</li>
              <li>Política de protección de datos</li>
              <li>Condiciones de servicio</li>
              <li>Oportunidades laborales</li>
              <li>Contacto</li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://twitter.com/bookturn"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/images/twitter.png"
                    alt="tw"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/bookturn"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/images/facebook.png"
                    alt="fb"
                    width={25}
                    height={25}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/bookturn"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="ig"
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className={styles.copyRights}>
              <div className={styles.rights}>
                <Link href="/bussines/">
                  <h1>Bookturn</h1>
                </Link>
                <p>© 2023 Bookturn Inc. Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBussines;

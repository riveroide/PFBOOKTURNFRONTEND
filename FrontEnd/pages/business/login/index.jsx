import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./index.module.css";
import Button from '@mui/material/Button';

const login = () => {
  const { data: session } = useSession();
  //console.log(session)
  if (session) {
    return (
      <div className={styles.container}>
        <h1>LOGIN EMPRESA</h1>
        <p>Bienvenido {session.user.name}</p>
        <p>No eres tu?</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
    );
  } else {
    return (
      <div className={styles.formContainer}>
      <div className={styles.container}>
        <h1>LOGIN EMPRESA</h1>
        <h3>Por favor registrá tu negocio o ingresa con Google</h3>
        <button onClick={() => signIn()}>Entrar con Google</button>
        <br></br>
        <Link href="/business/login/createform">
          <button>Clickea para registrar tu empresa</button></Link>
          <p>(info resumida sobre facilidades para empresa)</p>
          <Button variant="contained">Hello World</Button>
      </div>
      
      </div>
    );
  }
};

export default login;
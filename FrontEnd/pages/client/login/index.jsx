import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
      <div>
        <h1>LOGIN CLIENTE</h1>
        <p>Bienvenido {session.user.name}</p>
        <p>No eres tu?</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>LOGIN CLIENTE</h1>
        <h3>Por favor registrá tu cuenta o ingresa con Google</h3>
        <button onClick={() => signIn()}>Entrar con Google</button>
        <br></br>
        <Link href="/client/login/createform">
          <button>Clickea para registrarte</button></Link>
          <p>(info resumida sobre facilidades para cliente)</p>
        
      </div>
    );
  }
};

export default Login;
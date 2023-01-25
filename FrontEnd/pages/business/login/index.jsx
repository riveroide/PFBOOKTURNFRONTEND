import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Signed from "../../../components/LoginBusiness/Signed";
import NotSigned from "../../../components/LoginBusiness/NotSigned";
import NavBar2 from "components/Navbar/Navbar";
import FooterBussines from "components/FooterBussines/FooterBussines";

const Login = () => {
  const { data: session } = useSession();

  //console.log(session)
  if (session) {
    return (
      <div>
        <NavBar2 />
        <Signed session={session} />
        <FooterBussines />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar2 />
        <NotSigned />
        <FooterBussines />
      </div>
      //  <div className="flex h-screen justify-center items-center gap-10">

      // <div data-aos="fade-up" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      //     <a href="#">
      //         <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      //     </a>
      //     <div class="p-5">
      //         <a href="#">
      //             <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login</h5>
      //         </a>

      //         <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Una App para ti + Una App para tus clientes = Booksy. Seas una peluquería, barbería, centro de uñas, gimnasio, spa u otro, Booksy te ayuda a recibir pagos online y obtener clientes auto-reserva 24/7</p>
      //         <p class="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">Por favor registrá tu negocio o ingresa con Google</p>
      //         <div class="flex flex-1 justify-center items-center gap-2">
      //         <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => signIn()}>Entrar con Google</button>

      //         <Link href="/business/login/createform">
      //         <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => signIn()}>Registrarse
      //             <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
      //         </Link>
      //         </div>

      //     </div>

      // </div>

      // </div> */}
    );
  }
};

export default Login;

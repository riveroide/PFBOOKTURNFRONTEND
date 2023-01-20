import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Signed from "../../../components/LoginClient/Signed";
import NotSigned from "../../../components/LoginClient/NotSigned";
import NavBar2 from "../../../components/Navbar/Navbar";

const Login = () => {
  const { data: session } = useSession();
  console.log(session, "soy session")
  if (session) {
    return (
      <div>
        <NavBar2/>
      <Signed session={session}/>
      </div>
      
    );
  } else {
    return (
      <div>
        <NavBar2/>
        <NotSigned/>
      </div>
      
      
    );
  }
};

export default Login;
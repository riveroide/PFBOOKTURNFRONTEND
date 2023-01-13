import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Signed from "../../../components/LoginClient/Signed";
import NotSigned from "../../../components/LoginClient/NotSigned";

const Login = () => {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
      <Signed session={session}/>
    );
  } else {
    return (
      <NotSigned/>
      
    );
  }
};

export default Login;
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import Signed from "../../../components/LoginClient/Signed";
import NotSigned from "../../../components/LoginClient/NotSigned";
import NavBar2 from "../../../components/Navbar/Navbar";

const Login = () => {
  const { data: session } = useSession();
  if (session?.id.length === 21){
    console.log ("es de google")
    // try {
    //   const userexists = axios.get(`https://plankton-app-jy8jr.ondigitalocean.app/api/users?populate=*&filters[email][$containsi]=`+ session?.email)
    //   if (!userexists){
    //     axios.post('https://plankton-app-jy8jr.ondigitalocean.app/api/users', {
    //         username: session?.user.name,
    //         email: session?.user.email,
    //         role: 2,
    //       }).then(r => {
            
    //       })
    //     } 
    //       axios.post('https://plankton-app-jy8jr.ondigitalocean.app/api/clients' , { 
    //         data: {
    //           nameComplete: session?.user.name,
    //           client: createuser.id
    //         }
    //       })
        
    //   }
    //  catch (error) {
    //   return null
    // }
  } 

  console.log(session, "session entera")
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
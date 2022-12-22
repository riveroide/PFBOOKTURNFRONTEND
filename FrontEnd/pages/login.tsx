import {useSession, signIn, signOut} from 'next-auth/react'

const login = () =>{
    const {data: session} = useSession()
    
  if(session){
    return(
        <div><p>Bienvenido {session.user.name}</p>
        <button onClick={()=>signOut()}>Cerrar sesión</button>
        </div>
    )
  } else {
    return(
        <div><p>No estas logeado</p>
        <button onClick={()=>signIn()}>Entrar</button>
        </div>
    )
  }
}

export default login
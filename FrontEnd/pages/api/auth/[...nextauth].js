import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider  from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "example@email.com"},
                password: { label: "Password", type: "password", placeholder: "password"},
            },
            authorize: (credentials) =>{
                //hacer validacion con la base de datos
                if(credentials?.username==="nico" && credentials?.password === "nico123"){
                    return{
                        id: 2,
                        name: "nico",
                        password: "nico123"
                    };
                }
                return null
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    
    callbacks:{
        jwt:({ token, user}) => {
            if(user){
                token.id = user.id;
            }
            return token
        },
        session: ({session, token})=>{
            if (token){
                session.id= token.id;
            }
            return session;
        }
    },
    secret: "test",
    encription: true

})
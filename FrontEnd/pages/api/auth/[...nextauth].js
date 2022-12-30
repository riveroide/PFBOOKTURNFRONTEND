import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider  from "next-auth/providers/credentials"
import axios from "axios";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "example@email.com"},
                password: { label: "Password", type: "password", placeholder: "password"},
            },
            authorize: async (credentials) =>{
                //hacer validacion con la base de datos
                try {
                    const users = await axios.get('http://localhost:3001/business/login/'+ credentials?.username)
                    if(credentials?.password === users.data.password){
                        return{
                            id: users.data.id,
                            name: users.data.user,
                            password: users.data.password
                        }
                    }
                } catch (error) {
                    
                    return null
                }
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
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "tu email",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "******",
        },
      },
      authorize: async (credentials) => {
        //hacer validacion con la base de datos
        console.log("antes del try")
        try {
          const users = await axios.post(
            "https://plankton-app-jy8jr.ondigitalocean.app/api/auth/local",
            {
              identifier: credentials.email,
              password: credentials.password,
            },
          ).then(res => res.data)
          
          const data = await axios.get(`http://localhost:1337/api/users/${users.user.id}?populate=*`)
          
          if (users){
            return {
                id: users.user.id,
                token: users.jwt,
                email: users.user.email,
                name: users.user.username,
                 role: data.role.name
              }
          }       
          }
        catch (error) {
          console.log(error, "error")
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.password = user.password;
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.name = token.name;
        session.password = token.password;
        session.role = token.role;
      }
      return session;
    },
  },
   secret: "test",
  encription: true,
});

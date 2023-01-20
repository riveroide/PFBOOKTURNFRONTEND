import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { loginUser } from "../../../redux/actions/users/postUser";

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
      authorize: async (credentials, req) => {
        //hacer validacion con la base de datos
        try {
          // const {data: user} = await axios.post(`https://plankton-app-jy8jr.ondigitalocean.app/api/auth/local`,{
          //   identifier: credentials.email,
          //   password: credentials.password
          // })
          const res = await fetch(
            "https://plankton-app-jy8jr.ondigitalocean.app/api/auth/local",
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await res.json();

          if (res.ok && user) {
            console.log(user, "soy user pos post");
            const data = await axios.get(
              `http://localhost:1337/api/users/${user.user.id}?populate=*`
            );

            if (user) {
              return {
                id: user.user.id,
                token: user.jwt,
                email: user.user.email,
                name: user.user.username,
                role: data.role.name,
              };
            }
          }
        } catch (error) {
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

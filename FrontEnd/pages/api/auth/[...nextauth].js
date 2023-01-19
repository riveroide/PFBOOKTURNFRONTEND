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
          label: "Password",
          type: "password",
          placeholder: "contraseña",
        },
      },
      authorize: async (credentials,req) => {
        //hacer validacion con la base de datos
        try {
          const { data: users } = await axios.post(
            `https://plankton-app-jy8jr.ondigitalocean.app/api/auth/local?populate=*`,
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          )
          const { data } = await axios.get(`https://plankton-app-jy8jr.ondigitalocean.app/api/users/${users.user.id}?populate=*`, { identifier: credentials.identifier, password: credentials.password })
          console.log(users)
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
    }
  },
    secret: "test",
  encription: true,
});

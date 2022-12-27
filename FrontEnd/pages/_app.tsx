import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store"

function MyApp({ Component, pageProps }: AppProps, { session }: any) {
  return (
    <ReduxProvider store={store}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </ReduxProvider>
  );
}

export default MyApp;

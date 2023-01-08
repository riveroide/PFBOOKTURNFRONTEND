import "../styles/globals.css";
// import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

let persistor = persistStore(store);

function MyApp({ Component, pageProps } /*: AppProps */, { session }) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <PersistGate persistor={persistor} loading={null}>
          {() => (
              <Component {...pageProps} />
          )}
        </PersistGate>
      </SessionProvider>
    </ReduxProvider>
  );
}

export default MyApp;

import Layout from "@/components/Layout/Layout";
import { wrapper } from "@/redux/app/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

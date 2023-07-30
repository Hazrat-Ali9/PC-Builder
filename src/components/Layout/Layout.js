import { useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import MobileNavbar from "../Shared/Navbar/MobileNavbar";
import { TailSpin } from "react-loader-spinner";

const Layout = ({ children }) => {
  const {session, status} = useSession();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
        />
        <title>PC Builder</title>
        <meta
          name="description"
          content="E-commerce website build 💗 🔥 by Hazrat Ali"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/img/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/img/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="layout">
        {/* {status === "loading" ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50 loader">
            <TailSpin
              height="80"
              width="80"
              color="#0a81ab"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : ( */}
          <>
            <Navbar />
            <MobileNavbar />
            {children}
            <Footer />
          </>
        {/* )} */}
      </div>
    </>
  );
}

export default Layout;
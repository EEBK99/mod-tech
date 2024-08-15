import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";
import LangSidebar from "./LangSidebar";

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>ModTech.com</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Zoko - React Next IT Solutions Company Template"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Zoko - React Next IT Solutions Company Template"
        ></meta>
        <meta
          name="twitter:card"
          content="Zoko - React Next IT Solutions Company Template"
        ></meta>
        <link rel="canonical" href="https://zoko-react.hibootstrap.com/"></link>
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />

      <LangSidebar />
    </>
  );
};

export default Layout;

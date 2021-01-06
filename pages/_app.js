import "../styles/index.css";
import "../styles/navbar.css";
import "../styles/globals.css";
import "../styles/HomeCarousel/homeSlider1.css";
import "../styles/HomeCarousel/homeSlider2.css";
import "../styles/HomeCarousel/homeSlider3.css";
import "../styles/dermfill.css";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Chennai's leading skin clinic" />
        <meta name="keywords" content="Skin Clinic" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#DF9A80" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <title>Tanuja Reddy Skin Clinic</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

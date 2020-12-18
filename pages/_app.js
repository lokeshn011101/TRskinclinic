import "../styles/index.css";
import "../styles/navbar.css";
import "../styles/globals.css";
import "../styles/HomeCarousel/homeSlider1.css";
import "../styles/HomeCarousel/homeSlider2.css";
import "../styles/HomeCarousel/homeSlider3.css";
import "../styles/dermfill.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

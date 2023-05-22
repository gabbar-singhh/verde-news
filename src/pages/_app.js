import "@/styles/globals.css";
import Head from "next/head";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

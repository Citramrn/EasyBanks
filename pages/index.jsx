import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/jumbotron/Hero";
import Grid from "../components/choose/Grid";
import Article from "../components/articles/Article";
import Footer from "../components/footer/Footer";
import Head from "next/head.js";

export default function Home() {
  return (
    <div className="application font-sans overflow-hidden relative max-w-full ">
      <Head>
        <title>Easybank</title>
        <meta name="description" content="EasyBank" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Hero />
      <Grid />
      <Article />
      <Footer />
    </div>
  );
}

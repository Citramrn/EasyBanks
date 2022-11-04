import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/jumbotron/Hero.jsx";
import Grid from "./components/choose/Grid.jsx";
import Article from "./components/articles/Article.jsx";
import Footer from "./components/footer/Footer.jsx";
import Head from "next/head.js";

export default function Home() {
  return (
    <div className="application font-sans overflow-hidden relative max-w-full">
      <Head>
        <title>Easybank</title>
        <meta name="description" content="EasyBank" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Hero />
      <Grid />
      <Article />
      <Footer />
    </div>
  );
}

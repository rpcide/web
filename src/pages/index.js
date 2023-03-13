import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Contribute from "@/components/Contribute";

export default function Home() {
  return (
    <>
      <Head>
        <title>RPC IDE | Editor de Código Online - Java, C++ y Python</title>
        <meta
          name="description"
          content="Editor de código online para la enseñanza y aprendizaje, especialmente para la programación competitiva. Como lo es la red de programación competitiva en la UFPS."
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <Features />
        <Contribute />
        <Footer />
      </main>
    </>
  );
}

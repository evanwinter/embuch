import Head from "next/head";
import { Header } from "./components/header";
import { Marquee } from "./components/marquee";
import { Nav } from "./components/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emily Buchberger</title>
        <meta
          name="description"
          content="Portfolio site for Emily Buchberger, a brand designer in Chicago."
        />
        <meta
          name="keywords"
          content="branding, design, graphic design, brand design, brand designer, chicago, emily buchberger"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full flex flex-col justify-between p-8">
        <Header />
        <Nav />
      </div>
      <div className="absolute left-0 top-[16vh] overflow-hidden w-full">
        <Marquee />
      </div>
    </>
  );
}

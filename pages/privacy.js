import Head from "next/head";
import Header from "../components/Header";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta name="description" content="Legals / Privacy rules" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="main">
        <h1>Privacy</h1>
        <p>blabla</p>
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal Notice</title>
        <meta name="description" content="Data about the content creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="main">
        <h1>Legal Notice</h1>
        <p>blabla</p>
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta name="description" content="Privacy / Data Protection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="main" className="non-app legal">
        <div className="container">
          <h1 className="title">Privacy / Data Protection</h1>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Impressum</title>
        <meta name="description" content="Data about the content creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="main" class="non-app legal">
        <div className="container">
          <h1 className="title">Impressum</h1>
          <p>Ursula Gottschall</p>
          <p>
            Selzenstraße 3<br />
            79280 Au
            <br />
            Germany
          </p>
          <p>E-Mail info )ät( patchnplay.com</p>
          <p>VAT-ID/USt-ID DE2608454966</p>
        </div>
      </main>
    </>
  );
}

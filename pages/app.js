import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import { ColorsProvider } from "../components/ColorsContext";
import { ColorsProviderDemo } from "../components/ColorsContext";
import { BigBlocksProvider } from "../components/BigBlocksContext";
import { BigBlocksProviderDemo } from "../components/BigBlocksContext";
import { SquaresProvider } from "../components/SquaresContext";
import { SquaresProviderDemo } from "../components/SquaresContext";
import { StylersProvider } from "../components/StylersContext";
import { FabricsProvider } from "../components/FabricsContext";
import { FabricsProviderDemo } from "../components/FabricsContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Squares from "../components/Squares";
import { SquaresContext } from "../components/SquaresContext";

export default function App() {
  const router = useRouter();
  const { show } = router.query;

  return (
    <>
      <Head>
        <title>PatchNPlay App</title>
        <meta name="description" content="Create and calculate your quilt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorsProvider>
        <ColorsProviderDemo>
          <BigBlocksProvider>
            <BigBlocksProviderDemo>
              <SquaresProvider>
                <SquaresProviderDemo>
                  <StylersProvider>
                    <FabricsProvider>
                      <FabricsProviderDemo>
                        <Header>
                          <Navigation param={show} />
                        </Header>
                        <Squares param={show} />
                      </FabricsProviderDemo>
                    </FabricsProvider>
                  </StylersProvider>
                </SquaresProviderDemo>
              </SquaresProvider>
            </BigBlocksProviderDemo>
          </BigBlocksProvider>
        </ColorsProviderDemo>
      </ColorsProvider>
    </>
  );
}

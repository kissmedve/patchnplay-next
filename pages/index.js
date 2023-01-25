import Head from "next/head";
import Header from "../components/Header";
import NavigationLanding from "../components/NavigationLanding";
import Image from "next/image";
import Link from "next/link";

import progressPic from "../public/images/pnp_work-in-progress_tr.png";
import examplePic6 from "../public/images/quilt-example-6.png";
import examplePic7 from "../public/images/quilt-example-7.png";
import examplePic8 from "../public/images/quilt-example-8.png";
import examplePic9 from "../public/images/quilt-example-9.png";
import examplePic10 from "../public/images/quilt-example-10.png";
import toolsPic from "../public/images/pnp_tools2.png";
import palettePic from "../public/images/pnp_palette.png";
import previewPic from "../public/images/pnp_preview.png";
import breakPic from "../public/images/pnp_break.png";
import calculatePic from "../public/images/pnp_calculate.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>PatchNPlay</title>
        <meta name="description" content="The Playful Way to Create Quilts" />
        <meta
          property="og:image"
          content="https://patchnplay.com/images/patchnplay_og.png"
        />
        <meta property="og:url" content="https://patchnplay.com" />
        <meta
          property="og:title"
          content="PatchNPlay - The Playful Way to Create Quilts"
        />
        <meta
          property="og:description"
          content="Web App to create patchwork on the basis of Half Square Triangles, and calculate fabric requirements for each colour used, featuring full squares, HSTs, predefined pattern blocks, sashings, and borders."
        />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="PatchNPlay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <NavigationLanding />
      </Header>
      <div className="hero-wrapper">
        <div className="hero columns">
          <div className="claim-container column col-lg-12 col-5">
            <div className="pre-title">Patch, Play and have Fun</div>
            <h1 className="title">Design Quilts with Ease</h1>
            <div className="image-container column hide-xl show-md col-6 col-lg-10 col-ml-auto">
              <Image
                src={progressPic}
                alt="Designing a Quilt with PatchNPlay"
                width="548"
                height="587"
              />
            </div>
            <div className="claim">
              Combine squares and half-square-triangles.
              <br />
              Include predefined blocks. Add sashings and borders. <br />
              Colorize it all using your very own colour story. <br />
              And, finally, get the required fabric measurements.
            </div>

            <button className="btn btn-lg play">
              <Link href="/app?show=demo">Try and Play</Link>
            </button>
          </div>
          <div className="image-container hide-md show-xl column col-6 col-md-10 col-ml-auto">
            <Image
              src={progressPic}
              alt="Designing a Quilt with PatchNPlay"
              width="548"
              height="587"
            />
          </div>
        </div>
      </div>

      <div id="main" className="landing">
        <div className="container">
          <section className="section description">
            <div className="columns">
              <h2 className="section-title">Enjoy the Process</h2>
            </div>
            <div className="columns">
              <div className="column img-container col-md-10 bottom-reduce col-lg-5 col-7">
                <Image
                  src={toolsPic}
                  className="img-responsive"
                  alt="Design tools"
                />
              </div>
              <div className="column text-container col-md-12 col-lg-7 col-5">
                <h3>Clever tools make designing easy</h3>
                <ul>
                  <li>
                    Add or delete rows and columns at the click of a button.{" "}
                  </li>
                  <li>
                    Define type and colour(s) of each square individually.{" "}
                  </li>
                  <li>
                    Switch entire rows or columns from individual squares to
                    combined lines of sashing. Define the sashing width and
                    colorize them collectively.
                  </li>
                  <li>
                    Add as many borders you like - you could even make an entire
                    quilt just out of borders.
                  </li>
                  <li>
                    Add predefined blocks (4-patch, 9-patch, 16-patch, etc.) as
                    highlights or as timesavers to spare yourself the repetitive
                    work of cloning design areas.
                  </li>
                </ul>
              </div>
            </div>

            <div className="columns">
              <div className="column text-container col-md-12 elem2 col-lg-7 col-5">
                <h3>Save your custom colours in a palette.</h3>
                <p>
                  Choose your colours in advance and use them everywhere. Of
                  course you can add to or delete from the palette at any time.
                  You could even predefine your colour story in a colour tool
                  and type in the colors by hex or rgb name.
                </p>
              </div>
              <div className="column img-container elem1 bottom-reduce col-md-10 col-lg-5 col-7">
                <Image
                  src={palettePic}
                  className="img-responsive"
                  alt="Colour palette"
                />
              </div>
            </div>

            <div className="columns">
              <div className="column img-container col-md-10 bottom-reduce col-lg-5 col-7">
                <Image
                  src={previewPic}
                  className="img-responsive"
                  alt="Preview"
                />
              </div>
              <div className="column text-container col-md-12 col-lg-7 col-5">
                <h3>Step back and have a look.</h3>
                <p>
                  Enjoy a preview of your work at any time, scaled to your
                  screen - so you can work on a part of a large piece and still
                  get a glimpse of what the whole thing will look like - even
                  from your phone or tablet.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column text-container col-md-12 elem2 col-lg-7 col-5">
                <h3>No need to finish in one sitting</h3>
                <p>
                  Work on your creation at your own pace. When you need a break,
                  just download a file that contains all the data, and when you
                  re-upload it, you can pick up your work where you left off.
                </p>
              </div>
              <div className="column img-container col-md-10 elem1 bottom-reduce col-lg-5 col-7">
                <Image
                  src={breakPic}
                  className="img-responsive"
                  alt="Coffee break"
                />
              </div>
            </div>

            <div className="columns">
              <div className="column img-container col-md-10 bottom-reduce col-lg-5 col-7">
                <Image
                  src={calculatePic}
                  className="img-responsive"
                  alt="Calculate fabrics"
                />
              </div>
              <div className="column text-container col-md-12 col-lg-7 col-5">
                <h3>Get an estimate of how much fabric is needed.</h3>
                <p>
                  PatchNPlay gives you the freedom to create AND frees you from
                  the chore of calculating fabric requirements. No matter how
                  many colours your quilt contains, you get an estimate how much
                  you need of each fabric that goes into your design. You can
                  even choose from several fabric widths.
                </p>
              </div>
            </div>
          </section>

          <section className="section examples">
            <h2 className="section-title">The Possibilities are Endless</h2>
            <div className="showcase">
              <div className="sliderbox">
                <div className="slide slide1">
                  <Image
                    src={examplePic6}
                    width="400"
                    height="400"
                    alt="Design example"
                  />
                </div>
                <div className="slide slide2">
                  <Image
                    src={examplePic7}
                    width="400"
                    height="400"
                    alt="Design example"
                  />
                </div>
                <div className="slide slide3">
                  <Image
                    src={examplePic8}
                    width="400"
                    height="400"
                    alt="Design example"
                  />
                </div>
                <div className="slide slide4">
                  <Image
                    src={examplePic9}
                    width="400"
                    height="400"
                    alt="Design example"
                  />
                </div>
                <div className="slide slide5">
                  <Image
                    src={examplePic10}
                    width="400"
                    height="400"
                    alt="Design example"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section cta">
            <div className="columns call-to-action">
              <div className="column col-12 ">
                <div className="action-buttons">
                  <button className="btn btn-lg play mx-2">
                    <Link href="/app?show=demo">Play with Demo</Link>
                  </button>
                  <button className="btn btn-lg design mx-2">
                    <Link href="/app">Start Designing</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

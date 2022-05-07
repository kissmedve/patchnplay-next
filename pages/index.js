import Head from "next/head";
import Header from "../components/Header";
import NavigationLanding from "../components/NavigationLanding";
import Image from "next/image";
import Link from "next/link";
import quiltsPic from "../public/images/pnp_quilts.png";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <NavigationLanding />
      </Header>
      <div className="hero-wrapper">
        <div className="hero hero-lg bg-primary">
          <div className="container">
            <div className="columns">
              <div className="column col-8"></div>
              <div className="column col-4">
                <h1>
                  Patch <br />
                  Play <br />
                  <div className="minor">and</div>
                  Have Fun
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main" className="landing">
        <div className="container">
          {/*             <div className="column col-6">
              <Image
                src={quiltsPic}
                className="img-responsive"
                alt="Design examples"
              />
            </div>
 */}
          <div className="columns">
            <div className="column col-12 text-center lead-copy">
              <h2>
                Click, play, and enjoy <br /> The possibilities are endless!
              </h2>
              <p>
                With just a few basic shapes - squares and half square triangles
                - <br />
                you get a bazillion options. <br />
                Traditional or modern, bold, large, fine-grained, detailed ...
              </p>
              <p>PatchNPlay puts it all at your fingertips.</p>
            </div>
          </div>

          <div className="columns">
            <div className="column col-6">
              <h2>Clever tools make designing easy</h2>
              <ul>
                <li>
                  Add or delete rows and columns at the click of a button.{" "}
                </li>
                <li>Define type and colour(s) of each square individually. </li>
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
            <div className="column col-6">
              <Image
                src={toolsPic}
                className="img-responsive"
                alt="Design tools"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column col-6">
              <Image
                src={palettePic}
                className="img-responsive"
                alt="Colour palette"
              />
            </div>
            <div className="column col-6">
              <h2>Save your custom colours in a palette.</h2>
              <p>
                Choose your colours in advance and use them everywhere. Of
                course you can add to or delete from the palette at any time.
                You could even predefine your colour story in a colour tool and
                type in the colors by hex or rgb name.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column col-6">
              <h2>Step back and have a look.</h2>
              <p>
                Enjoy a preview of your work at any time, scaled to your screen
                - so you can work on a part of a large piece and still get a
                glimpse of what the whole thing will look like - even from your
                phone or tablet.
              </p>
            </div>
            <div className="column col-6">
              <Image
                src={previewPic}
                className="img-responsive"
                alt="Preview"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column col-6">
              <Image
                src={breakPic}
                className="img-responsive"
                alt="Coffee break"
              />
            </div>
            <div className="column col-6">
              <h2>No need to finish in one sitting</h2>
              <p>
                Work on your creation at your own pace. When you need a break,
                just download a file that contains all the data, and when you
                re-upload it, you can pick up your work where you left off.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column col-6">
              <h2>Get an estimate of how much fabric is needed.</h2>
              <p>
                PatchNPlay gives you the freedom to create AND frees you from
                the chore of calculating fabric requirements. No matter how many
                colours your quilt contains, you get an estimate how much you
                need of each fabric that goes into your design. You can even
                choose from several fabric widths.
              </p>
            </div>
            <div className="column col-6">
              <Image
                src={calculatePic}
                className="img-responsive"
                alt="Calculate fabrics"
              />
            </div>
          </div>

          <div className="columns call-to-action">
            <div className="column col-12 ">
              <div className="action-buttons">
                <button className="btn btn-lg btn-success mx-2">
                  <Link href="/app">Start Designing</Link>
                </button>
                <button className="btn btn-lg btn-success mx-2">
                  <Link href="/app?show=demo">Play with Demo</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

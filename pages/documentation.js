import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import addColumnPic1 from "../public/images/pnp_add-columns_example-1.png";
import addColumnPic2 from "../public/images/pnp_add-columns_example-2.png";
import addColumnPic3 from "../public/images/pnp_add-columns_example-3.png";
import deleteColumnPic1 from "../public/images/pnp_delete-columns_example-1.png";
import addRowPic1 from "../public/images/pnp_add-rows_example-1.png";
import addRowPic2 from "../public/images/pnp_add-rows_example-2.png";
import addRowPic3 from "../public/images/pnp_add-rows_example-3.png";
import deleteRowPic1 from "../public/images/pnp_delete-rows_example-1.png";
import bigBlockPic1 from "../public/images/pnp_bigblock_example-1.png";
import bigBlockPic2 from "../public/images/pnp_bigblock_example-2.png";
import bigBlockPic3 from "../public/images/pnp_bigblock_example-3.png";
import bigBlockPic4 from "../public/images/pnp_bigblock_example-4.png";
import bigBlockPic5 from "../public/images/pnp_bigblock_example-5.png";
import bigBlockPic6 from "../public/images/pnp_bigblock_example-6.png";
import bigBlockSashingCrossPic1 from "../public/images/pnp_bigblock-sashingcross_example-1.png";
import bigBlockSashingCrossPic3 from "../public/images/pnp_bigblock-sashingcross_example-3.png";
import bordersPic1 from "../public/images/pnp_borders_example-1.png";
import bordersPic3 from "../public/images/pnp_borders_example-3.png";
import bordersPic5 from "../public/images/pnp_borders_example-5.png";
import colorizeHSTPic1 from "../public/images/pnp_colorize-hst_example-1.png";
import colorizeHSTPic2 from "../public/images/pnp_colorize-hst_example-2.png";
import colorizeSquaresPic1 from "../public/images/pnp_colorize-squares_example-1.png";
import colorsPic1 from "../public/images/pnp_colors-1.png";
import colorsPic2 from "../public/images/pnp_colors-2.png";
import premadesAddDeletePic1 from "../public/images/pnp_premades-add-delete-1.png";
import premadesAddDeletePic2 from "../public/images/pnp_premades-add-delete-2.png";
import premadesFiltersPic1 from "../public/images/pnp_premades-filters-1.png";
import premadesFiltersPic2 from "../public/images/pnp_premades-filters-2.png";
import premadesFiltersPic4 from "../public/images/pnp_premades-filters-4.png";
import sashingColumnPic1 from "../public/images/pnp_sashing-column_example-1.png";
import sashingColumnPic2 from "../public/images/pnp_sashing-column_example-2.png";
import sashingColumnPic3 from "../public/images/pnp_sashing-column_example-3.png";
import sashingColumnPic4 from "../public/images/pnp_sashing-column_example-4.png";
import sashingRowPic1 from "../public/images/pnp_sashing-row_example-1.png";
import sashingRowPic2 from "../public/images/pnp_sashing-row_example-2.png";
import navPicColours from "../public/images/pnp-nav_colours.png";
import navPicPremades from "../public/images/pnp-nav_premades.png";
import navPicUpload from "../public/images/pnp-nav_upload.png";
import navPicDownload from "../public/images/pnp-nav_download.png";
import previewPic1 from "../public/images/pnp_preview_example-1.png";
import calculateFormPic1 from "../public/images/pnp_calculateform_example-1.png";
import calculatedPic1 from "../public/images/pnp_calculated_example-1.png";
import calculatedPic2 from "../public/images/pnp_calculated_example-2.png";

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation</title>
        <meta name="description" content="How to use the app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div id="main" className="non-app">
        <div className="container">
          <div className="columns">
            <h1 className="title">Documentation</h1>
          </div>
          <section className="section colours">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="h2 section-title">Colours</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={navPicColours}
                    alt="Navigation item Colours"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Define your palette ahead of time or add colours whenever you
                  need them.
                  <br />
                  The colours in your Custom Palette will appear in all palettes
                  wherever you need to colour a unit.
                </p>
                <p>
                  Take care not to pick transparent colours, since you would
                  find it hard to transfer them to real world fabric colours.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5 ">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={colorsPic1}
                    alt="Add colour to custom palette"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3 className="h3">Add colours</h3>
                <p>
                  Find a colour using the colour picker.
                  <br />
                  If you already know some colour values, you can insert them
                  directly into the field below the colour picker area. <br />
                  The formats available are rgb, hsl, and hex (just move the
                  arrows up or down).{" "}
                </p>
                <p>
                  The colour your cursor is on will automatically transfer the
                  field next to the &quot;Add to Palette&quot; button.
                </p>

                <p>
                  When you are satisfied with your choice, press the &quot;Add
                  to Palette&quot; button, and the colour will appear in the
                  &quot;Custom Palette&quot; selection.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5 ">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={colorsPic2}
                    alt="Delete colour from custom palette"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3 className="h3">Delete colour</h3>
                <p>
                  To delete a colour from the Custom Palette, click on the
                  respective square which will make the colour appear next to
                  the &quot;Remove colour&quot; button. Press the button, and
                  the colour is gone.{" "}
                </p>
                <p>
                  {" "}
                  Please note: in order to remove a colour it needs to be
                  completely out of use first!
                </p>
              </div>
            </div>
          </section>

          <section className="section bigblocks">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Premades (Big Blocks)</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={navPicPremades}
                    alt="Navigation: Big Blocks (premade blocks)"
                  />
                </figure>
              </div>
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <p>
                  To make designing quilt patterns more effective - and way more
                  fun! - we provide a wide selection of &quot;Big Blocks&quot;
                  to choose from. Big Blocks are premade patterned blocks you
                  can use to replace repetitive patterns throughout a design, or
                  to play with in a lot of variations.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={premadesFiltersPic1}
                    alt="Big Blocks (premade blocks)"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3 className="h3">Your selection</h3>
                <p>
                  Preselect the Big Blocks you plan to use. Like colours in your
                  custom palette they will be available whenever you are working
                  with Big Blocks.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={premadesFiltersPic2}
                    alt="Big Blocks Filtered - 4x4 Full Squares"
                  />
                </figure>

                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={premadesFiltersPic4}
                    alt="Big Blocks Filtered - 3x3 Mixed"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Choice of premades</h3>
                <p>
                  Big Blocks come in different patch sizes: right now you can
                  choose from 2 by 2 through 6 by 6, but there may be up to 9 by
                  9 in the future.
                </p>
                <p>
                  Most Big Blocks have a 2 colours scheme, though we plan to add
                  3 colour blocks, too.
                </p>
                <p>
                  Patterns are divided into Full Squares only, Half Square
                  Triangles (HST) only, and Mixed, to make finding blocks more
                  transparent and structured.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5 ">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={premadesAddDeletePic1}
                    alt="Add Big Block to palette"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Add Big Block</h3>
                <p>
                  To add a Big Block to the palette, just click on the block you
                  want to pick. The block will then show up in your Big Block
                  palette.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5 ">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={premadesAddDeletePic2}
                    alt="Delete Big Block from palette"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Delete Big Block</h3>
                <p>
                  To remove a Big Block from the palette, just click on the
                  block you want to delete.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="section rows">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Rows</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <div className="columns ">
                  <div className="column col-6">
                    <figure className="figure ">
                      <Image
                        className="img-responsive"
                        src={addRowPic1}
                        alt="Add row"
                      />
                    </figure>
                  </div>

                  <div className="column col-6">
                    <figure className="figure">
                      <Image
                        className="img-responsive"
                        src={addRowPic2}
                        alt="Add row"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3 className="h3">Add Row</h3>
                <p>
                  Add a new row by clicking on the &quot;+&quot; button above
                  the line you want the new row to appear. The new row will
                  always be created below the row with the &quot;+&quot; button.
                  <br />
                  Newly added rows will always contain Full Squares by default.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={addRowPic3}
                    alt="Add row"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  In this fashion you can create as many rows you need and where
                  you want them.
                </p>

                <p>
                  Note: you cannot add a row when a Big Block is sitting on the
                  row you are adding from and the following row combined. In
                  this case you need to size down the Big Block or remove it
                  entirely.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={deleteRowPic1}
                    alt="Delete row"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3 className="h3">Delete Row</h3>
                <p>Delete</p>
              </div>
            </div>
          </section>

          <section className="section pnp-columns">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Columns</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <div className="columns ">
                  <div className="column col-6">
                    <figure className="figure">
                      <Image
                        className="img-responsive"
                        src={addColumnPic1}
                        alt="Add column"
                      />
                    </figure>
                  </div>

                  <div className="column col-6">
                    <figure className="figure">
                      <Image
                        className="img-responsive"
                        src={addColumnPic2}
                        alt="Add column"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Add Column</h3>
                <p>
                  Add a new column by clicking on the &quot;+&quot; button on
                  the left of the column you want the new column to appear. The
                  new column will always be created to the right of the column
                  with the &quot;+&quot; button.
                  <br />
                  Newly added columns will always contain Full Squares by
                  default.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 ol-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={addColumnPic3}
                    alt="Add column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  In this fashion you can create as many columns you need and
                  where you want them.
                </p>

                <p>
                  Note: you cannot add a column when a Big Block is sitting on
                  the column you are adding from and the following column
                  combined. In this case you need to size down the Big Block or
                  remove it entirely.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={deleteColumnPic1}
                    alt="Delete column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Delete Column</h3>
                <p>Delete</p>
              </div>
            </div>
          </section>

          <section className="section colorize">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Colorize</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={colorizeSquaresPic1}
                    alt="Colour a square"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Colorize Squares</h3>
                <p>Click on the square you want to colorize.</p>
                <p>
                  In the dialog popup that appears, the &quot;Full Square&quot;
                  is already highlighted as the default option.
                </p>
                <p>
                  Click on a colour in the Square Palette. The square will take
                  the selected colour.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={colorizeHSTPic1}
                    alt="Colour a Half Square Triangle (HST)"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Colorize HST (Half Square Triangles)</h3>
                <p>Choose a square and click on it.</p>
                <p>
                  In the dialog popup that appears, click the &quot;HST up&quot;
                  or &quot;HST down&quot; option, depending on your choice. The
                  full square will transform to a diagonally divided square,
                  with both a left and a right triangle.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5 ">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={colorizeHSTPic2}
                    alt="Colorize a Half Square Triangle (HST)"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Each triangle has its own palette. Upon clicking on a colour,
                  the pertaining triangle will take the selected colour.
                </p>
              </div>
            </div>
          </section>

          <section className="section sashing-column">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Sashing Columns</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingColumnPic1}
                    alt="Change column to sashing column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Any column can be switched to be a sashing column. Individual
                  squares will then be integrated into the sashing, sharing one
                  collective colour, and without the possibility of being
                  handled individually.
                </p>
                <p>
                  One caveat though: You can&apos;t switch to sashing as long as
                  a Big Block is sitting on one of the column&apos;s squares.
                </p>
                <p>
                  Click on the &quot;S&quot; on top of the column to call up the
                  dialog box.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingColumnPic2}
                    alt="Switch column to sashing column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  When you click the &quot;Switch to Sashing&quot; button, all
                  squares within the column will change from individual squares
                  to members of the sashing column.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingColumnPic3}
                    alt="Colour the sashing column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Colour the entire column by clicking on a colour in the
                  palette.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingColumnPic4}
                    alt="Resize the width of the sashing column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  You can also resize the width of the sashing column in steps
                  of half units (1 unit is the square width).
                </p>
              </div>
            </div>
          </section>

          <section className="section sashing-row">
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-7 col-ml-auto">
                <h2 className="section-title">Sashing Rows</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingRowPic1}
                    alt="Switch row to sashing row"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Like columns, any row can be switched to be a sashing row.
                </p>{" "}
                <p>
                  You&quot;ll find the &quot;S&quot; button to the left of the
                  row in question.
                </p>
                <p>
                  As with columns, you also can&apos;t switch a row to sashing
                  as long as a Big Block is sitting on one of the row&apos;s
                  squares.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={sashingRowPic2}
                    alt="Colour sashing row"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Click the &quot;Switch to Sashing&quot; button to change all
                  squares within the row from individual squares to members of a
                  sashing row.
                </p>
                <p>
                  Colour them all by clicking on the selected colour in the
                  palette, and/or resize the height of the sashing row.
                </p>
              </div>
            </div>
          </section>

          <section className="sashing-cross">
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-7 col-ml-auto">
                <h2 className="section-title">Sashing Cross</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockSashingCrossPic1}
                    alt="Sashing cross"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Squares contained in a sashing row or sashing column can"t be
                  handled individually, with one exception: the sashing cross,
                  which is the square where row and column meet.
                </p>

                <p>
                  This special square can be coloured individually, divided into
                  HSTs, or - if width and height are equal - accentuated with a
                  Big Block, which in itself has all styling options available
                  to it, except resizing due to the size constraints the
                  sashings impose.
                </p>
              </div>
            </div>
          </section>

          <section className="section edit-bigblocks">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Big Blocks</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic1}
                    alt="Square dialog box with Big Block option"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  A Big Block is just another styling option on the squares
                  dialog box. Click on it and the Big Block dialog box opens.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic2}
                    alt="Big Block dialog box with all available options"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  On top of the dialog box you&quot;ll find your selection of
                  premade blocks.{" "}
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic3}
                    alt="Pick a Big Block"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Click on one and the selected square will change to contain
                  this Big Block.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic4}
                    alt="Turn the block"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  You can turn the block to the right or to the left which gives
                  you twice or even four times more designing options depending
                  on the pattern of the block. In some cases you could even
                  create a circular pattern just by positioning 4 blocks in 4
                  directions next to each other.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic5}
                    alt="Resize a Big Block"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  You can also resize a Big Block to span over as many squares
                  as you wish, as long as they are already available in the
                  underlying structure. The Big Block will always grow to the
                  right and to the bottom of its position.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bigBlockPic6}
                    alt="Colour a Big Block"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Each Big Block pattern comes with a defined number of colours
                  (mostly 2), and each colouring option has its own palette.
                  Click on a colour in the respective palettes to colour the
                  block.
                </p>
              </div>
            </div>
          </section>

          <section className="section sashing-cross">
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure ">
                  <Image
                    className="img-responsive"
                    src={bigBlockSashingCrossPic3}
                    alt="Big Block dialog box on sashing cross"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <h3>Big Block on Sashing Cross</h3>
                <p>
                  A special styling option for a sashing cross is to cover it
                  with a Big Block, provided that the square's width and height
                  are equal.
                </p>
                <p>
                  Apart from resizing, there are no restrictions. You can choose
                  any Big Block and turn or colorize to your liking.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="section borders">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Borders</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bordersPic1}
                    alt="Border"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  With the &apos;B&apos; (Borders) dialog box you can add and
                  remove borders, size all 4 border parts individually, and of
                  course colorize the border. However, you can&quot;t remove all
                  borders, there will always remain a minimum of 1 border.{" "}
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bordersPic3}
                    alt="Add column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  To add a new border, click on the &apos;+&apos; symbol of an
                  existing one, the new border will appear inside of it.
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={bordersPic5}
                    alt="Add column"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Click on the pen symbol to get the pertaining width and colour
                  forms.
                </p>
                <p>
                  A click on the &apos;-&apos; symbol of a specific border will
                  remove it.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="section download">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Download</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={navPicDownload}
                    alt="Download"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Pause your work at any time. Click the "Download" button and
                  save what you have. (Your results will be packed in a .json
                  file which upon re-upload will produce the graphic result you
                  left.)
                </p>
              </div>
            </div>
          </section>

          <section className="section upload">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Upload</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={navPicUpload}
                    alt="Upload"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Clicking the "Upload" button will produce a dialog that lets
                  you upload the work (the .json file) you downloaded earlier.
                </p>
                <p>
                  You can easily work on multiple projects in parallel - just
                  download your work and re-upload it to continue.
                </p>
              </div>
            </div>
          </section>

          <section className="section preview">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Preview</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={previewPic1}
                    alt="Preview"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Depending on the size of your project, but also on the size of
                  your screen, you might not be able to view the whole work
                  without scrolling. That's where the preview function comes in
                  handy. Clicking the "Preview" button will give you an overlay
                  with a view of your work compressed inside the limits of your
                  screen.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="section calculate">
            <div className="columns">
              <div className="column col-7 col-md-12 col-lg-6 col-ml-auto">
                <h2 className="section-title">Calculate Fabrics</h2>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={calculateFormPic1}
                    alt="Form to calculate fabrics"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  When you are done designing you want to know how much fabric
                  you'll need. Just hit the "Calculate" button and fill in the
                  form.
                </p>
                <p>
                  Every colour you included in your design is represented here.
                  Choose the fabric width that's closest to what your piece is
                  or what you will presumably be able to buy.{" "}
                </p>
                <p>
                  Then select the real life size the "plan squares" will
                  translate into.
                </p>
                <p>
                  And finally select the seam allowance you want to employ. Opt
                  for a bit more width, if you plan to straighten up squares
                  after sewing some pieces together.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={calculatedPic1}
                    alt="Fabric calculation results"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Upon hitting "Calculate Fabric Requirements" you will be
                  provided with a list of measurements, along with a visual
                  representation of the number of blocks counted per colour and
                  size. Half Square Triangles are consolidated into Squares, if
                  possible.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column col-md-12 col-lg-6 col-5">
                <figure className="figure">
                  <Image
                    className="img-responsive"
                    src={calculatedPic2}
                    alt="Fabric calculation results"
                  />
                </figure>
              </div>
              <div className="column col-md-12 col-lg-6 col-7">
                <p>
                  Squares of different heights are lined up each in their own
                  row(s). Therefore the fabric requirement will mostly be on the
                  generous side, but the visual representation will still be a
                  good basis to narrow down the requirement, if you need to
                  economize on a specific fabric.
                </p>
                <p>
                  Finally you can download the calculation, of course with the
                  graphics included.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

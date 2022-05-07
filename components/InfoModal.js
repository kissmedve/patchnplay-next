import React from "react";
import Image from "next/image";

const InfoModal = () => {
  return (
    <>
      <div className="quick-guide">
        {/* overview image */}
        <div className="h5">Quick Guide</div>
        {/* <div className="explanation">Find more information in the documentation.</div> */}

        <figure className="figure">
          <Image
            className="img-responsive"
            src="/images/pnp-overview-docs.png"
            alt="Overview Buttons"
            width="370"
            height="346"
          />
        </figure>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">1</span>Add Column / Add Row
          </div>
          <p>
            The new column / row is always created right to / below the pressed
            button.
          </p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">2</span>Delete Column / Delete Row
          </div>
          <p>You can delete everything down to one column / row.</p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">3</span>Sashing Styler
          </div>
          <p>
            Style a column / row of squares as sashing (or revert to squares).
          </p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">4</span>Border Styler
          </div>
          <p>Add, delete, or style borders.</p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">5</span>Square Styler
          </div>
          <ol>
            <li>
              Switch between full square, upwards half square triangles,
              downwards half square triangles, and color each shape
              individually.
            </li>
            <li>
              Replace squares with premade BigBlocks (1 square, 2 x 2 squares, 3
              x 3 squares, etc.). Color your BigBlock as provided.
            </li>
          </ol>
        </div>

        {/* overview nav image */}
        <figure className="figure">
          <Image
            className="img-responsive"
            src="/images/pnp-nav-overview-docs.png"
            alt="Overview Navigation Menu"
            width="560"
            height="117"
          />
        </figure>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">6</span>Color Picker
          </div>
          <p>
            Create your custom color palette to be included in every styling
            form.
          </p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">7</span>Gallery of predefined blocks
          </div>
          <p>
            Create your custom blocks palette to draw from on every BigBlock
            form.
          </p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">8</span>Preview
          </div>
          <p>View your work fitted to the page.</p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">9</span>Calculate Fabric Requirements
          </div>
          <p>
            depending on your measurements of choice: fabric width for each
            color, plus (basic) block size, and seam allowance.
          </p>
          <ol>
            <li>
              Get a list of all your fabric requirements along with schematic
              drawings of the pieces.
            </li>
            <li>Download the list as pdf file.</li>
          </ol>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">10</span>Upload data file
          </div>
          <p>Pick up your work exactly where you left off last time.</p>
        </div>

        <div className="info-wrapper">
          <div className="h6">
            <span className="info-number">11</span>Download data file
          </div>
          <p>Save your work on your computer.</p>
        </div>
      </div>
    </>
  );
};

export default InfoModal;

import React, { useState, useContext } from "react";
import Image from "next/image";
import Modal from "./Modal";
import ColorSettingsPalette from "./ColorSettingsPalette";
import BigBlockGallery from "./BigBlockGallery";
import DownloadJSON from "./DownloadJSON";
import UploadJSON from "./UploadJSON";
import PrintableSquaresGrid from "./PrintableSquaresGrid";
import CalculateFabricForm from "./CalculateFabricForm";
import { FabricsContext } from "./FabricsContext";
import iconCalc from "../public/icons/icon-calc.svg";
import iconColors from "../public/icons/icon-colors.svg";
import iconPremades from "../public/icons/icon-premades.svg";
import iconPreview from "../public/icons/icon-preview.svg";
import iconUpload from "../public/icons/icon-upload.svg";

const Navigation = ({ param }) => {
  // global states
  const { calcFabricModalIsOpen, setCalcFabricModalIsOpen } =
    useContext(FabricsContext);
  // local states
  const [colorsModalIsOpen, setColorsModalIsOpen] = useState(false);
  const [premadesModalIsOpen, setPremadesModalIsOpen] = useState(false);
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <section
        id="topnav"
        className={openMobileMenu === true ? `active` : null}
      >
        <div
          id="toggler"
          className={openMobileMenu === true ? `toggled` : null}
        >
          <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className="nav">
          <li className="nav-item" key="colorslink">
            <button
              className="btn btn-link"
              onClick={() => setColorsModalIsOpen(!colorsModalIsOpen)}
            >
              <Image src={iconColors} className="img-responsive" alt="Colors" />
              <span>Colors</span>
            </button>
          </li>
          <li className="nav-item" key="premadeslink">
            <button
              className="btn btn-link"
              onClick={() => setPremadesModalIsOpen(!premadesModalIsOpen)}
            >
              <Image
                src={iconPremades}
                className="img-responsive"
                alt="Premades"
              />
              <span>Premades</span>
            </button>
          </li>
          <li className="nav-item" key="previewlink">
            <button
              className="btn btn-link"
              onClick={() => setPreviewModalIsOpen(!previewModalIsOpen)}
            >
              <Image
                src={iconPreview}
                className="img-responsive"
                alt="Preview"
              />
              <span>Preview</span>
            </button>
          </li>
          <li className="nav-item" key="calcfabricslink">
            <button
              className="btn btn-link"
              onClick={() => setCalcFabricModalIsOpen(true)}
            >
              <Image
                src={iconCalc}
                className="img-responsive"
                alt="Calculate"
              />
              <span>Calculate</span>
            </button>
          </li>
          <li className="nav-item" key="uploadlink">
            <button
              className="btn btn-link"
              onClick={() => setUploadModalIsOpen(!uploadModalIsOpen)}
            >
              <Image src={iconUpload} className="img-responsive" alt="Upload" />
              <span>Upload</span>
            </button>
          </li>
          <li className="nav-item" key="downloadlink">
            <DownloadJSON param={param} />
          </li>
        </ul>
      </section>
      <Modal
        modalIsOpen={colorsModalIsOpen}
        closeModal={() => setColorsModalIsOpen(false)}
      >
        <ColorSettingsPalette param={param} />
      </Modal>
      <Modal
        modalIsOpen={premadesModalIsOpen}
        closeModal={() => setPremadesModalIsOpen(false)}
      >
        <BigBlockGallery param={param} />
      </Modal>
      <Modal
        modalIsOpen={previewModalIsOpen}
        closeModal={() => setPreviewModalIsOpen(false)}
      >
        <PrintableSquaresGrid param={param} />
      </Modal>
      <Modal
        modalIsOpen={calcFabricModalIsOpen}
        closeModal={() => setCalcFabricModalIsOpen(false)}
      >
        <CalculateFabricForm param={param} />
      </Modal>
      <Modal
        modalIsOpen={uploadModalIsOpen}
        closeModal={() => setUploadModalIsOpen(false)}
      >
        <UploadJSON param={param} />
      </Modal>
    </>
  );
};

export default Navigation;

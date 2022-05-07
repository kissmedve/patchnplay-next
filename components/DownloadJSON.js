import React, { useContext } from "react";
import Image from "next/image";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { BigBlocksContext } from "./BigBlocksContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";
import { FabricsContext, FabricsContextDemo } from "./FabricsContext";
import iconDownload from "../public/icons/icon-download.svg";

const DownloadJSON = ({ param }) => {
  // global states
  const {
    cols,
    rows,
    sashingCols,
    sashingRows,
    sashingWidths,
    sashingHeights,
    sashingColsColor,
    sashingRowsColor,
    squares,
    insertedBigBlocks,
    borders,
    squareWidth,
    borderBaseWidth,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { selectedBigBlocks } = useContext(BigBlocksContext);
  const { paletteColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );
  const { fabricWidths, fabricSquareWidth, seamAllowance } = useContext(
    param === "demo" ? FabricsContextDemo : FabricsContext
  );

  const data = {
    cols,
    rows,
    sashingCols,
    sashingRows,
    sashingWidths,
    sashingHeights,
    sashingColsColor,
    sashingRowsColor,
    squares,
    insertedBigBlocks,
    borders,
    squareWidth,
    borderBaseWidth,
    selectedBigBlocks,
    paletteColors,
    fabricWidths,
    fabricSquareWidth,
    seamAllowance,
  };

  return (
    <a
      className="btn btn-link"
      type="button"
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
      )}`}
      download="patchnplay.json"
    >
      <Image src={iconDownload} className="img-responsive" alt="Download" />
      <span>Download</span>
    </a>
  );
};

export default DownloadJSON;

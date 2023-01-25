import React, { useContext, useState } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { BigBlocksContext, BigBlocksContextDemo } from "./BigBlocksContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";
import { FabricsContext, FabricsContextDemo } from "./FabricsContext";
import Message from "./Message";

const UploadJSON = ({ param }) => {
  // global states
  const {
    updateSquares,
    updateCols,
    updateRows,
    updateSashingCols,
    updateSashingRows,
    updateSashingWidths,
    updateSashingHeights,
    updateSashingColsColor,
    updateSashingRowsColor,
    updateInsertedBigBlocks,
    updateBorders,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { updateBigBlocks } = useContext(
    param === "demo" ? BigBlocksContextDemo : BigBlocksContext
  );
  const { updateColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );
  const { updateFabricWidths, updateFabricSquareWidth, updateSeamAllowance } =
    useContext(param === "demo" ? FabricsContextDemo : FabricsContext);

  // local state
  const [selectedFile, setSelectedFile] = useState("");
  const [messageIsActive, setMessageIsActive] = useState(false);
  const [messageText, setMessageText] = useState("");

  const onFileChange = (event) => {
    let file = event.target.files[0];
    if (file.type === "application/json") {
      setSelectedFile(file);
    } else {
      setMessageText("File type not allowed");
      setMessageIsActive(true);
    }
  };

  const onFileUpload = async (event) => {
    event.preventDefault();

    if (selectedFile !== "") {
      const fileData = await selectedFile.text();
      let parsedData = JSON.parse(fileData);

      updateSquares(parsedData.squares);
      updateCols(parsedData.cols);
      updateRows(parsedData.rows);
      updateSashingCols(parsedData.sashingCols);
      updateSashingRows(parsedData.sashingRows);
      updateSashingWidths(parsedData.sashingWidths);
      updateSashingHeights(parsedData.sashingHeights);
      updateSashingColsColor(parsedData.sashingColsColor);
      updateSashingRowsColor(parsedData.sashingRowsColor);
      updateInsertedBigBlocks(parsedData.insertedBigBlocks);
      updateBorders(parsedData.borders);

      let blocks = parsedData.selectedBigBlocks.map((block) => Number(block));
      updateBigBlocks(blocks);

      updateColors(parsedData.paletteColors);

      updateFabricWidths(parsedData.fabricWidths);
      updateFabricSquareWidth(parsedData.fabricSquareWidth);
      updateSeamAllowance(parsedData.seamAllowance);
    } else {
      setMessageText("Please choose a file");
      setMessageIsActive(true);
    }
  };

  const closeMessage = (event) => {
    setMessageIsActive(false);
    setMessageText("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={onFileUpload}>
          <div className="form-group">
            <label className="form-label">
              Choose File
              <input
                className="form-input file-input"
                type="file"
                name="fileUpload"
                accept=".json"
                onChange={onFileChange}
              ></input>
            </label>
          </div>
          {messageIsActive ? (
            <Message text={messageText} closeMessage={closeMessage} />
          ) : (
            ""
          )}
          <button className="btn styler-btn" type="submit" name="save">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadJSON;

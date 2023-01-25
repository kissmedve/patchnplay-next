import React, { useState, useContext, useEffect, useCallback } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { StylersContext } from "./StylersContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";
import Palette from "./Palette";
import elementBlocks from "../data/elementBlocks";
import { BigBlocksContext, BigBlocksContextDemo } from "./BigBlocksContext";
import SVGBlock from "./SVGBlock";
import Message from "./Message";
import { bottomDistance, rightDistance } from "../utils/stylerDistance";
import {
  topOffset,
  leftOffset,
  pointerVerticalPosition,
  pointerHorizontalPosition,
  pointerClass,
} from "../utils/stylerPosition";

const BigBlockStyler = ({
  id,
  squareType,
  squareWidth,
  sashingCrossed,
  sashingWidth,
  sashingHeight,
  covered,
  param,
}) => {
  // global states
  const {
    squares,
    borders,
    sashingHeights,
    sashingWidths,
    borderBaseWidth,
    insertedBigBlocks,
    addInsertedBigBlock,
    editInsertedBigBlock,
    deleteInsertedBigBlock,
    insertedBigBlockEditSquares,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { closeBigBlockStyler } = useContext(StylersContext);
  const { selectedBigBlocks } = useContext(
    param === "demo" ? BigBlocksContextDemo : BigBlocksContext
  );
  const { paletteColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );

  // local states

  // identify selectedBlock
  const [selectedBigBlockId, setSelectedBigBlockId] = useState(null);

  // data for rendering purposes:
  // covered squares horizontally/vertically
  const [selectedBigBlockStretchSquares, setSelectedBigBlockStretchSquares] =
    useState(1);
  // amount of colour palettes
  const [selectedBigBlockColours, setSelectedBigBlockColours] = useState(2);

  const [messageIsActive, setMessageIsActive] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [stylerBottomDistance, setStylerBottomDistance] = useState(null);
  const [stylerRightDistance, setStylerRightDistance] = useState(null);
  const [stylerLeftDistance, setStylerLeftDistance] = useState(null);

  // measurements

  // measurements height
  const stylerInitialHeight = 401; // measured w/o blocks applied + with 2 colour bars
  const stylerAppliedBlock2ColorsHeight = 441; // measured with 2 colour bars
  const stylerAppliedBlock3ColorsHeight = 492; // measured with 3 colour bars

  let blockRows = Math.ceil(selectedBigBlocks.length / 5);
  let paletteRows = Math.ceil(paletteColors.length / 7);

  let stylerHeight1 = covered === false ? stylerInitialHeight : null;
  let stylerHeight2 =
    covered === true && Number(selectedBigBlockColours) === 2
      ? stylerAppliedBlock2ColorsHeight
      : null;
  let stylerHeight3 =
    covered === true && Number(selectedBigBlockColours) === 3
      ? stylerAppliedBlock3ColorsHeight
      : null;

  // measurements width
  const stylerWidth = 258;

  const setDistanceValues = useCallback(() => {
    let stylBottomDistance = bottomDistance(
      id,
      null,
      stylerHeight1,
      stylerHeight2,
      stylerHeight3,
      squareWidth,
      paletteRows,
      blockRows,
      sashingHeights,
      selectedBigBlockStretchSquares,
      borders,
      borderBaseWidth
    );
    setStylerBottomDistance(stylBottomDistance[1]);

    let stylRightDistance = rightDistance(
      id,
      null,
      stylerWidth,
      squareWidth,
      sashingWidths,
      selectedBigBlockStretchSquares,
      borders,
      borderBaseWidth
    );
    setStylerRightDistance(stylRightDistance[1]);
    setStylerLeftDistance(stylRightDistance[0]);
  }, [
    id,
    stylerHeight1,
    stylerHeight2,
    stylerHeight3,
    squareWidth,
    paletteRows,
    blockRows,
    sashingHeights,
    selectedBigBlockStretchSquares,
    borders,
    borderBaseWidth,
    stylerWidth,
    sashingWidths,
  ]);

  // check if a BigBlock is set, and if so, transfer its id and data to local state
  useEffect(() => {
    if (insertedBigBlocks && insertedBigBlocks.length > 0) {
      let activeBlock = insertedBigBlocks.find(
        (block) => block.anchorSquare === id
      );
      if (activeBlock) {
        setSelectedBigBlockId(activeBlock.elementBlocksId);
        setSelectedBigBlockStretchSquares(activeBlock.stretchSquares);
        setSelectedBigBlockColours(activeBlock.colours);
      }
    }
  }, [insertedBigBlocks, id]);

  // check if the square is a sashing cross
  // if a BigBlock can be set (width === height),
  // take the stretch from sashingWidth
  useEffect(() => {
    if (sashingCrossed === true && sashingWidth === sashingHeight) {
      setSelectedBigBlockStretchSquares(sashingWidth);
    }
  }, [sashingCrossed, sashingWidth, sashingHeight]);

  // adjust position of BigBlockStyler when it initially pops up
  // (with 2 colour bars as min, if no block is selected/active)
  useEffect(() => {
    setDistanceValues();
  }, [setDistanceValues]);

  // adjust position of BigBlockStyler when stretch or number of palettes change
  useEffect(() => {
    setDistanceValues();
  }, [
    selectedBigBlockStretchSquares,
    selectedBigBlockColours,
    setDistanceValues,
  ]);

  // ================================

  const findInsertedBigBlockIndex = () => {
    if (
      insertedBigBlocks.length > 0 &&
      insertedBigBlocks.find((block) => block.anchorSquare === id)
    ) {
      let insIndex = insertedBigBlocks.indexOf(
        insertedBigBlocks.find((block) => block.anchorSquare === id)
      );
    }
    return insIndex;
  };

  // determine covered squares depending on stretch and anchor square
  const checkSquares = (stretch) => {
    let arrayedIds = [];
    let anchorRowCol = id.split("-");
    for (let i = 0; i < stretch; i++) {
      for (let k = 0; k < stretch; k++) {
        arrayedIds.push([
          parseInt(anchorRowCol[0]) + i,
          parseInt(anchorRowCol[1]) + k,
        ]);
      }
    }
    let coveredIds = arrayedIds.map((id) => id[0] + "-" + id[1]);
    return coveredIds;
  };

  // ===================================

  // insert or edit selected Big Block
  const selectBigBlock = (blockId) => {
    let newBigBlockId = blockId;
    let newBigBlock = elementBlocks.find((block) => block.id === newBigBlockId);

    // if there's already a BigBlock in place
    if (selectedBigBlockId !== null) {
      let insIndex = findInsertedBigBlockIndex();
      // switch previous to new BigBlock
      editInsertedBigBlock({
        ...insertedBigBlocks[insIndex],
        elementBlocksId: newBigBlockId,
        rowCol: newBigBlock.rowCol,
        colours: newBigBlock.colours,
        rotated: newBigBlock.rotated,
        stretchSquares: selectedBigBlockStretchSquares,
      });
      setSelectedBigBlockId(newBigBlockId);
      setSelectedBigBlockColours(newBigBlock.colours);
    } else {
      // if there's no previous BigBlock,
      // set initial settings of inserted block
      addInsertedBigBlock({
        anchorSquare: id,
        stretchSquares: selectedBigBlockStretchSquares,
        elementBlocksId: newBigBlockId,
        rowCol: newBigBlock.rowCol,
        colours: newBigBlock.colours,
        rotated: newBigBlock.rotated,
        squaresColor1: newBigBlock.squaresColor1,
        squaresColor2: newBigBlock.squaresColor2,
        squaresColor3: newBigBlock.squaresColor3,
        trianglesColor1: newBigBlock.trianglesColor1,
        trianglesColor2: newBigBlock.trianglesColor2,
        trianglesColor3: newBigBlock.trianglesColor3,
        color1: "#666666",
        color2: "#dddddd",
        color3: "#b6b6b6",
      });
      insertedBigBlockEditSquares({
        ids: [id],
        covered: true,
        bigBlockAnchor: id,
      });
    }
  };

  const handleBigBlockStretch = (event) => {
    event.stopPropagation();
    // stretch only on sitting BigBlock
    if (covered !== true) {
      setMessageText("Please select a Big Block first.");
      setMessageIsActive(true);
      return;
    }

    const newStretch = Number(event.target.value);

    // evaluate BigBlock placement conflicts
    const startRow = parseInt(id.split("-")[0]);
    const startCol = parseInt(id.split("-")[1]);
    for (let i = startRow; i < startRow + newStretch; i++) {
      for (let k = startCol; k < startCol + newStretch; k++) {
        if (squares[i] === undefined || squares[i][k] === undefined) {
          setMessageText(
            "A Big Block can't be placed outside of the Squares Grid."
          );
          setMessageIsActive(true);
          return;
        }
        if (
          squares[i][k].sashingCrossed === false &&
          squares[i][k].sashing === true
        ) {
          setMessageText(
            "A Big Block can't be placed on top of sashing, except on a crossing."
          );
          setMessageIsActive(true);
          return;
        }
        if (
          squares[i][k].sashingCrossed === true &&
          squares[i][k].sashingWidth !== squares[i][k].sashingHeight
        ) {
          setMessageText(
            "A Big Block can only be placed on a sashing cross with equal width and height."
          );
          setMessageIsActive(true);
          return;
        }
        if (
          squares[i][k].covered === true &&
          squares[i][k].bigBlockAnchor !== id
        ) {
          setMessageText("Big Blocks can't overlap.");
          setMessageIsActive(true);
          return;
        }
      }
    }

    // check previous stretch value
    let previousStretch = selectedBigBlockStretchSquares;

    // sashing cross is never more than 1 square
    let coveredSquares =
      sashingCrossed === false ? checkSquares(newStretch) : [id];

    let insIndex = findInsertedBigBlockIndex();
    editInsertedBigBlock({
      ...insertedBigBlocks[insIndex],
      stretchSquares: newStretch,
    });

    if (newStretch > previousStretch) {
      // stretch increased
      insertedBigBlockEditSquares({
        ids: coveredSquares,
        covered: true,
        bigBlockAnchor: id,
      });
    }
    if (newStretch < previousStretch) {
      // stretch decreased
      let previousAnchorSqus = squares.map((squs) => {
        return squs.filter((squ) => squ.bigBlockAnchor === id);
      });
      let obsoleteAnchorSqus = previousAnchorSqus
        .reduce((acc, val) => acc.concat(val), [])
        .map((squ) => squ.id)
        .filter((squ) => !coveredSquares.includes(squ));

      // remaining covered squares
      insertedBigBlockEditSquares({
        ids: coveredSquares,
        covered: true,
        bigBlockAnchor: id,
      });
      // no longer covered squares
      insertedBigBlockEditSquares({
        ids: obsoleteAnchorSqus,
        covered: false,
        bigBlockAnchor: "",
      });
    }
    setSelectedBigBlockStretchSquares(newStretch);
  };

  const rotateRight = (event) => {
    let insIndex = findInsertedBigBlockIndex();
    let insBigBlock = insertedBigBlocks[insIndex];

    if (insBigBlock.rotated === 360 || insBigBlock.rotated === -360) {
      insBigBlock.rotated = 0;
    }
    const newRotated = insBigBlock.rotated + 90;
    editInsertedBigBlock({
      ...insertedBigBlocks[insIndex],
      rotated: newRotated,
    });
  };

  const rotateLeft = (event) => {
    let insIndex = findInsertedBigBlockIndex();
    let insBigBlock = insertedBigBlocks[insIndex];

    if (insBigBlock.rotated === 360 || insBigBlock.rotated === -360) {
      insBigBlock.rotated = 0;
    }
    const newRotated = insBigBlock.rotated - 90;
    editInsertedBigBlock({
      ...insertedBigBlocks[insIndex],
      rotated: newRotated,
    });
  };

  const removeBigBlock = (event) => {
    event.stopPropagation();
    if (
      insertedBigBlocks &&
      insertedBigBlocks.find((block) => block.anchorSquare === id)
    ) {
      let blockToRemove = insertedBigBlocks.find(
        (block) => block.anchorSquare === id
      );
      let coveredSquares = checkSquares(blockToRemove.stretchSquares);
      deleteInsertedBigBlock(blockToRemove.anchorSquare);
      insertedBigBlockEditSquares({
        ids: coveredSquares,
        covered: false,
        bigBlockAnchor: "",
      });
      setSelectedBigBlockId(null);
      setSelectedBigBlockStretchSquares(1);
    }
  };

  // colour palette only pops up when Big Block is selected
  // amount of subpalettes depending on selected Big Block
  const bigBlockColourType =
    Number(selectedBigBlockColours) !== 0
      ? Number(selectedBigBlockColours) === 2
        ? "bigBlockCol2"
        : "bigBlockCol3"
      : "";

  const preselectedBlocks = elementBlocks
    .filter((block) => selectedBigBlocks.includes(block.id))
    .map((block) => (
      <div
        className={`premade 
      ${selectedBigBlockId === block.id ? "active" : ""}`}
        key={block.id}
        onClick={(event) => selectBigBlock(block.id)}
      >
        <SVGBlock
          rowCol={block.rowCol}
          blockId={block.id}
          color1="#666666"
          color2="#dddddd"
          color3="#b6b6b6"
          key={block.id}
        />
      </div>
    ));

  const selectedBorder =
    preselectedBlocks.length === 0
      ? "dashed 1px #333"
      : "solid 1px transparent";
  const selectedMargin = preselectedBlocks.length === 0 ? "10px 0 20px" : "0";

  const closeMessage = (event) => {
    setMessageIsActive(false);
  };

  const sashingWidthStretch = sashingWidths[Number(id.split("-")[1])];
  const sashingHeightStretch = sashingHeights[Number(id.split("-")[0])];

  return (
    <>
      <div
        className="bigblock styling-dropdown popup active"
        style={{
          left:
            covered === true
              ? squareWidth * selectedBigBlockStretchSquares - 18 + `px`
              : sashingWidths[Number(id.split("-")[1])] * squareWidth -
                18 +
                `px`,
          top:
            covered === true
              ? squareWidth * selectedBigBlockStretchSquares - 18 + `px`
              : sashingHeights[Number(id.split("-")[0])] * squareWidth -
                18 +
                `px`,
          transform: `translate(${leftOffset(
            stylerRightDistance,
            stylerLeftDistance,
            stylerWidth,
            selectedBigBlockStretchSquares,
            null,
            sashingWidthStretch,
            squareWidth
          )}px, ${topOffset(
            stylerBottomDistance,
            null,
            null,
            selectedBigBlockStretchSquares,
            null,
            sashingHeightStretch,
            squareWidth
          )}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="card ">
          <button
            className="btn btn-clear"
            aria-label="Close"
            onClick={closeBigBlockStyler}
          ></button>

          <div className="card-body">
            <div className="card-title h6">Big Block</div>

            <div
              className="selected-gallery"
              style={{
                minHeight: "35px",
                minWidth: "35px",
                border: selectedBorder,
                margin: selectedMargin,
              }}
            >
              {preselectedBlocks}
            </div>

            {messageIsActive ? (
              <Message text={messageText} closeMessage={closeMessage} />
            ) : (
              ""
            )}
            <div className="bigblock-adjust columns">
              {sashingCrossed === false ? (
                <div className="bigblock-width column col-6">
                  <div className="card-title h6">Stretch</div>
                  <div className="form-group ">
                    <input
                      type="number"
                      min="1"
                      step="1"
                      name="stretchSquares"
                      value={selectedBigBlockStretchSquares}
                      onChange={handleBigBlockStretch}
                    />
                    <span className="explanation">squares</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="bigblock-rotate column col-6">
                <div className="card-title h6">Rotate</div>
                <div className="form-group">
                  <button
                    className="btn styler-btn rotate-left"
                    onClick={rotateLeft}
                  >
                    <i className="btn-icon"></i>
                  </button>

                  <button
                    className="btn styler-btn rotate-right"
                    onClick={rotateRight}
                  >
                    <i className="btn-icon"></i>
                  </button>
                </div>
              </div>
            </div>

            <Palette
              squareId={id}
              paletteType={bigBlockColourType}
              param={param}
            />

            {covered === true ? (
              <div className="bigblock-delete">
                <button
                  className="btn styler-btn"
                  onClick={(event) => removeBigBlock(event)}
                >
                  Remove Big Block
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <span
          className={`pointer ${pointerClass(
            stylerBottomDistance,
            stylerRightDistance,
            null,
            stylerWidth,
            null
          )}`}
          style={{
            top: `${pointerVerticalPosition(
              stylerBottomDistance,
              null,
              null
            )}px`,
            left: `${pointerHorizontalPosition(
              stylerRightDistance,
              stylerWidth,
              null
            )}px`,
          }}
        ></span>
      </div>
    </>
  );
};

export default BigBlockStyler;

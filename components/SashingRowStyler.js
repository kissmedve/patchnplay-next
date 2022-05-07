import React, { useContext, useState, useEffect, useCallback } from "react";
import { StylersContext } from "./StylersContext";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";
import Palette from "./Palette";
import { bottomDistance } from "../utils/stylerDistance";
import {
  topOffset,
  pointerVerticalPosition,
  pointerClass,
} from "../utils/stylerPosition";

const SashingRowStyler = ({ rowCol, id, param }) => {
  // global states
  const { closeSashStyler } = useContext(StylersContext);
  const {
    cols,
    squares,
    sashingRows,
    updateSashingRows,
    updateSquares,
    sashingHeights,
    updateSashingHeights,
    squareWidth,
    borders,
    borderBaseWidth,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { paletteColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );

  // local states
  const [inputSashingHeight, setInputSashingHeight] = useState(
    sashingHeights[id]
  );
  const [appliedSashingHeight, setAppliedSashingHeight] = useState(
    sashingHeights[id]
  );
  const [stylerBottomDistance, setStylerBottomDistance] = useState(null);
  const [stylerTopDistance, setStylerTopDistance] = useState(null);

  // measurements height
  const sashingStylerHeight = 296; // measured w/o colour bar
  let paletteRows = Math.ceil(paletteColors.length / 5);

  let stylerHeight1 = sashingStylerHeight;

  const setDistanceValue = useCallback(() => {
    let stylBottomDistance = bottomDistance(
      null,
      id,
      stylerHeight1,
      null,
      null,
      squareWidth,
      paletteRows,
      null,
      sashingHeights,
      null,
      borders,
      borderBaseWidth
    );
    setStylerBottomDistance(stylBottomDistance[1]);
    setStylerTopDistance(stylBottomDistance[0]);
  }, [
    id,
    stylerHeight1,
    squareWidth,
    paletteRows,
    sashingHeights,
    borders,
    borderBaseWidth,
  ]);

  useEffect(() => {
    setDistanceValue();
  }, [appliedSashingHeight, setDistanceValue]);

  const handleInputHeight = (event) => {
    setInputSashingHeight(Number(event.target.value));
  };

  const switchToSashing = (event) => {
    // check if any square on the row is covered by a BigBlock
    let isSquCovered = squares
      .map((squs) => {
        return squs.some((squ) => squ.row === id && squ.covered === true);
      })
      .some((el) => el === true);

    // only switch to sashing, if not covered
    if (!isSquCovered) {
      let squarez = squares;
      for (let i = 0; i < squarez.length; i++) {
        for (let k = 0; k < squarez[0].length; k++) {
          // mark squares also belonging to sashing columns as sashing cross
          if (squarez[i][k].row === id && squarez[i][k].sashing === true) {
            squarez[i][k].sashingCrossed = true;
            squarez[i][k].squareType = "rectSashing";
          }
          // mark all squares of the sashing row
          if (squarez[i][k].row === id) {
            squarez[i][k].sashing = true;
          }
        }
      }

      let onSashingRows = sashingRows.map((sashRow, index) => {
        return index === id ? (sashRow = true) : sashRow;
      });

      updateSashingRows(onSashingRows);
      updateSquares(squarez);
    }
  };

  const switchToSquares = () => {
    let offSashingRows = sashingRows.map((sashRow, index) => {
      return index === id ? (sashRow = false) : sashRow;
    });

    let offSashingHeights = sashingHeights.map((sashHeight, index) => {
      return index === id ? (sashHeight = 1) : sashHeight;
    });

    let squarezz = squares;
    for (let i = 0; i < squarezz.length; i++) {
      for (let k = 0; k < cols.length; k++) {
        // unmark all squares of the sashing row,
        // sashing height back to normal
        if (squarezz[i][k].row === id) {
          squarezz[i][k].sashing = false;
          squarezz[i][k].sashingHeight = 1;
        }
        // square that was sashing cross still remains sashing
        if (
          squarezz[i][k].row === id &&
          squarezz[i][k].sashingCrossed === true
        ) {
          squarezz[i][k].sashing = true;
          squarezz[i][k].sashingCrossed = false;
          squarezz[i][k].squareType = "rect";
        }
      }
    }
    updateSashingRows(offSashingRows);
    updateSashingHeights(offSashingHeights);
    updateSquares(squarezz);
  };

  const applySashingHeight = (event) => {
    let onSashingHeights = sashingHeights.map((sashHeight, index) => {
      return index === id ? (sashHeight = inputSashingHeight) : sashHeight;
    });

    let sashSquares = squares;
    for (let i = 0; i < sashSquares.length; i++) {
      for (let k = 0; k < cols.length; k++) {
        if (sashSquares[i][k].row === id) {
          sashSquares[i][k].sashingHeight = inputSashingHeight;
        }
      }
    }

    updateSashingHeights(onSashingHeights);
    updateSquares(sashSquares);
    setAppliedSashingHeight(inputSashingHeight);
  };

  return (
    <>
      <div
        className="styling-dropdown sashing popup active"
        style={{
          top: `${(appliedSashingHeight - 1) * squareWidth + 40}px`,
          left: `20px`,
          transform: `translateY(${topOffset(
            stylerBottomDistance,
            stylerTopDistance,
            stylerHeight1,
            null,
            sashingHeights[id],
            null,
            squareWidth
          )}px`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="card ">
          <button
            className="btn btn-clear"
            aria-label="Close"
            onClick={closeSashStyler}
          ></button>

          <div className="card-body">
            <div className="form-title h6">Sashing</div>
            {sashingRows[id] === false ? (
              <button className="btn styler-btn" onClick={switchToSashing}>
                Switch to Sashing
              </button>
            ) : (
              <button className="btn styler-btn" onClick={switchToSquares}>
                Switch to Squares
              </button>
            )}

            <div className="form-title h6">Height</div>
            <div className="explanation">(square units)</div>
            <div className="form-group sashing-number">
              <input
                type="number"
                min="1"
                step="0.5"
                name="sashingHeight"
                value={inputSashingHeight}
                onChange={handleInputHeight}
                disabled={sashingRows[id] === false ? true : false}
              />
              <button className="btn styler-btn" onClick={applySashingHeight}>
                Apply
              </button>
            </div>

            <Palette paletteType={"sashRow"} rowColId={id} param={param} />
          </div>
        </div>
        <span
          className={`pointer ${pointerClass(
            stylerBottomDistance,
            null,
            stylerTopDistance,
            null,
            stylerHeight1
          )}`}
          style={{
            top: `${pointerVerticalPosition(
              stylerBottomDistance,
              stylerTopDistance,
              stylerHeight1
            )}px`,
            left: `8px`,
          }}
        ></span>
      </div>
    </>
  );
};

export default SashingRowStyler;

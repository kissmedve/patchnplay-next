import React, { useContext, useState, useEffect, useCallback } from "react";
import { StylersContext } from "./StylersContext";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import Palette from "./Palette";
import { rightDistance } from "../utils/stylerDistance";
import {
  leftOffset,
  pointerHorizontalPosition,
  pointerClass,
} from "../utils/stylerPosition";

const SashingColStyler = ({ rowCol, id, param }) => {
  // global states
  const { closeSashStyler } = useContext(StylersContext);
  const {
    cols,
    squares,
    sashingCols,
    updateSashingCols,
    updateSquares,
    sashingWidths,
    updateSashingWidths,
    squareWidth,
    borders,
    borderBaseWidth,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);

  // local states
  const [inputSashingWidth, setInputSashingWidth] = useState(sashingWidths[id]);
  const [appliedSashingWidth, setAppliedSashingWidth] = useState(
    sashingWidths[id]
  );
  const [stylerRightDistance, setStylerRightDistance] = useState(null);
  const [stylerLeftDistance, setStylerLeftDistance] = useState(null);

  // measurements width
  const stylerWidth = 208;

  const setDistanceValue = useCallback(() => {
    let stylRightDistance = rightDistance(
      null,
      id,
      stylerWidth,
      squareWidth,
      sashingWidths,
      null,
      borders,
      borderBaseWidth
    );
    setStylerRightDistance(stylRightDistance[1]);
    setStylerLeftDistance(stylRightDistance[0]);
  }, [id, stylerWidth, squareWidth, sashingWidths, borders, borderBaseWidth]);

  useEffect(() => {
    setDistanceValue();
  }, [appliedSashingWidth, setDistanceValue]);

  const handleInputWidth = (event) => {
    setInputSashingWidth(Number(event.target.value));
  };

  const switchToSashing = (event) => {
    // check if any square on the column is covered by a BigBlock
    let isSquCovered = squares
      .map((squs) => {
        return squs.some((squ) => squ.col === id && squ.covered === true);
      })
      .some((el) => el === true);

    // only switch to sashing, if not covered
    if (!isSquCovered) {
      let squarez = squares;
      for (let i = 0; i < squarez.length; i++) {
        for (let k = 0; k < cols.length; k++) {
          // mark squares also belonging to sashing rows as sashing cross
          if (squarez[i][k].col === id && squarez[i][k].sashing === true) {
            squarez[i][k].sashingCrossed = true;
            squarez[i][k].squareType = "rectSashing";
          }
          // mark all squares of the sashing column
          if (squarez[i][k].col === id) {
            squarez[i][k].sashing = true;
          }
        }
      }

      let onSashingCols = sashingCols.map((sashCol, index) => {
        return index === id ? (sashCol = true) : sashCol;
      });

      updateSashingCols(onSashingCols);
      updateSquares(squarez);
    }
  };

  const switchToSquares = () => {
    let offSashingCols = sashingCols.map((sashCol, index) => {
      return index === id ? (sashCol = false) : sashCol;
    });

    let offSashingWidths = sashingWidths.map((sashWidth, index) => {
      return index === id ? (sashWidth = 1) : sashWidth;
    });

    let squarezz = squares;
    for (let i = 0; i < squarezz.length; i++) {
      for (let k = 0; k < cols.length; k++) {
        // unmark all squares of the sashing column,
        // sashing width back to normal
        if (squarezz[i][k].col === id) {
          squarezz[i][k].sashing = false;
          squarezz[i][k].sashingWidth = 1;
        }
        // square that was sashing cross still remains sashing
        if (
          squarezz[i][k].col === id &&
          squarezz[i][k].sashingCrossed === true
        ) {
          squarezz[i][k].sashing = true;
          squarezz[i][k].sashingCrossed = false;
          squarezz[i][k].squareType = "rect";
        }
      }
    }
    updateSashingCols(offSashingCols);
    updateSashingWidths(offSashingWidths);
    updateSquares(squarezz);
  };

  const applySashingWidth = (event) => {
    let onSashingWidths = sashingWidths.map((sashWidth, index) => {
      return index === id ? (sashWidth = inputSashingWidth) : sashWidth;
    });

    let sashSquares = squares;
    for (let i = 0; i < sashSquares.length; i++) {
      for (let k = 0; k < cols.length; k++) {
        if (sashSquares[i][k].col === id) {
          sashSquares[i][k].sashingWidth = inputSashingWidth;
        }
      }
    }

    updateSashingWidths(onSashingWidths);
    updateSquares(sashSquares);
    setAppliedSashingWidth(inputSashingWidth);
  };

  return (
    <>
      <div
        className="styling-dropdown sashing popup active"
        style={{
          top: `20px`,
          left: `${(appliedSashingWidth - 1) * squareWidth + 40}px`,
          transform: `translateX(${leftOffset(
            stylerRightDistance,
            stylerLeftDistance,
            stylerWidth,
            null,
            sashingWidths[id],
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
            {sashingCols[id] === false ? (
              <button className="btn styler-btn" onClick={switchToSashing}>
                Switch to Sashing
              </button>
            ) : (
              <button className="btn styler-btn" onClick={switchToSquares}>
                Switch to Squares
              </button>
            )}

            <div className="form-title h6">Width</div>
            <div className="explanation">(square units)</div>
            <div className="form-group sashing-number">
              <input
                type="number"
                min="1"
                step="0.5"
                name="sashingWidth"
                value={inputSashingWidth}
                onChange={handleInputWidth}
                disabled={sashingCols[id] === false ? true : false}
              />
              <button className="btn styler-btn" onClick={applySashingWidth}>
                Apply
              </button>
            </div>

            <Palette paletteType={"sashColumn"} rowColId={id} param={param} />
          </div>
        </div>
        <span
          className={`pointer ${pointerClass(
            null,
            stylerRightDistance,
            null,
            stylerWidth,
            null
          )}`}
          style={{
            top: `8px`,
            left: `${pointerHorizontalPosition(
              stylerRightDistance,
              stylerWidth
            )}px`,
          }}
        ></span>
      </div>
    </>
  );
};

export default SashingColStyler;

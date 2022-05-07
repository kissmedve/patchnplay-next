import React, { useState, useContext, useEffect, useCallback } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { StylersContext } from "./StylersContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";
import Palette from "./Palette";
import { bottomDistance, rightDistance } from "../utils/stylerDistance";
import {
  topOffset,
  leftOffset,
  pointerVerticalPosition,
  pointerHorizontalPosition,
  pointerClass,
} from "../utils/stylerPosition";

const SquareStyler = ({
  id,
  squareType,
  squareWidth,
  sashingCrossed,
  sashingRatioIsOne,
  squStylerIsOpen,
  param,
}) => {
  // global states
  const {
    editSquare,
    borders,
    sashingHeights,
    sashingWidths,
    borderBaseWidth,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { closeSquStyler, openBigBlockStyler } = useContext(StylersContext);
  const { paletteColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );

  // local states
  const [newSquareType, setNewSquareType] = useState(squareType);
  const [stylerBottomDistance, setStylerBottomDistance] = useState(null);
  const [stylerRightDistance, setStylerRightDistance] = useState(null);
  const [stylerLeftDistance, setStylerLeftDistance] = useState(null);

  // measurements height
  const stylerFullSquHeight = 299; // measured w/o colour bar
  const stylerHstsHeight = 328; // measured w/o colour bars
  let paletteRows = Math.ceil(paletteColors.length / 5);

  let stylerHeight1 =
    newSquareType === "rect" || newSquareType === "rectSashing"
      ? stylerFullSquHeight
      : null;
  let stylerHeight2 =
    newSquareType === "hstUp" || newSquareType === "hstDown"
      ? stylerHstsHeight
      : null;

  // measurements width
  const stylerWidth = 209;

  const setDistanceValues = useCallback(() => {
    let stylBottomDistance = bottomDistance(
      id,
      null,
      stylerHeight1,
      stylerHeight2,
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

    let stylRightDistance = rightDistance(
      id,
      null,
      stylerWidth,
      squareWidth,
      sashingWidths,
      null,
      borders,
      borderBaseWidth
    );
    setStylerRightDistance(stylRightDistance[1]);
    setStylerLeftDistance(stylRightDistance[0]);
  }, [
    id,
    stylerHeight1,
    stylerHeight2,
    squareWidth,
    paletteRows,
    sashingHeights,
    borders,
    borderBaseWidth,
    stylerWidth,
    sashingWidths,
  ]);

  const selectSquareType = (event) => {
    event.stopPropagation();
    let selectedSquareType = event.target.value;
    setNewSquareType(selectedSquareType);
    if (selectedSquareType === "bigBlockAnchor") {
      closeSquStyler();
      openBigBlockStyler(id);
    } else {
      editSquare({
        id: id,
        propertyKey: "squareType",
        propertyValue: selectedSquareType,
      });
    }
    if (stylerBottomDistance !== null && stylerRightDistance !== null) {
      setDistanceValues();
    }
  };

  const closeSquareStyler = (event) => {
    event.stopPropagation();
    closeSquStyler();
  };

  useEffect(() => {
    setDistanceValues();
  }, [setDistanceValues]);

  const sashingWidthStretch = sashingWidths[Number(id.split("-")[1])];
  const sashingHeightStretch = sashingHeights[Number(id.split("-")[0])];

  return (
    <>
      <div
        className={`styling-dropdown squares popup ${
          squStylerIsOpen === true ? "active" : ""
        }
        `}
        style={{
          top: `${(sashingHeightStretch - 1) * squareWidth + 32}px`,
          left: `${(sashingWidthStretch - 1) * squareWidth + 32}px`,
          transform: `translate(${leftOffset(
            stylerRightDistance,
            stylerLeftDistance,
            stylerWidth,
            null,
            null,
            sashingWidthStretch,
            squareWidth
          )}px, ${topOffset(
            stylerBottomDistance,
            null,
            null,
            null,
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
            onClick={closeSquareStyler}
          ></button>

          <div className="card-body">
            <div className="card-title h6">Square Type</div>
            <div className="form-group">
              {sashingCrossed === false ? (
                <>
                  <label className="form-radio rect">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="rect"
                      checked={newSquareType === "rect"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>Full Square</span>
                  </label>

                  <label className="form-radio hst-up">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="hstUp"
                      checked={newSquareType === "hstUp"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>HST Up</span>
                  </label>

                  <label className="form-radio hst-down">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="hstDown"
                      checked={newSquareType === "hstDown"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>HST Down</span>
                  </label>

                  <label className="form-radio hst-bigblock">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="bigBlockAnchor"
                      checked={newSquareType === "bigBlockAnchor"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>Big Block Anchor</span>
                  </label>
                </>
              ) : sashingCrossed === true && sashingRatioIsOne === true ? (
                <>
                  <label className="form-radio rect">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="rectSashing"
                      checked={newSquareType === "rectSashing"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>Full Square</span>
                  </label>
                  <label className="form-radio hst-bigblock">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="bigBlockAnchor"
                      checked={newSquareType === "bigBlockAnchor"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>Big Block Anchor</span>
                  </label>
                </>
              ) : sashingCrossed === true && sashingRatioIsOne === false ? (
                <>
                  <label className="form-radio rect">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      value="rectSashing"
                      checked={newSquareType === "rectSashing"}
                      onChange={selectSquareType}
                    />
                    <i className="form-icon"></i>
                    <span>Sashing Cross</span>
                  </label>
                  <label className="form-radio hst-bigblock">
                    <input
                      className="square-type"
                      type="radio"
                      name="squareType"
                      disabled="bigBlockAnchor"
                    />
                    <i className="form-icon"></i>
                    <span className="disabled">Big Block Anchor</span>
                  </label>
                  <div className="explanation">
                    Width and height of sashing cross must be equal!
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <Palette squareId={id} paletteType={newSquareType} param={param} />
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

export default SquareStyler;

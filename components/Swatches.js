import React, { useState, useEffect, useContext } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import { ColorsContext, ColorsContextDemo } from "./ColorsContext";

const Swatches = ({
  swatchesTitle,
  swatchesGroup,
  paletteType,
  squareId,
  rowColId,
  borderPos,
  param,
}) => {
  // global states
  const {
    editSquare,
    editSquares,
    insertedBigBlocks,
    editInsertedBigBlock,
    editBorderColor,
    sashingColsColor,
    sashingRowsColor,
    updateSashingColsColor,
    updateSashingRowsColor,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);
  const { paletteColors } = useContext(
    param === "demo" ? ColorsContextDemo : ColorsContext
  );

  // local states
  const [colorTarget, setColorTarget] = useState("");

  useEffect(() => {
    if (paletteType === "rect" && swatchesGroup === "1") {
      setColorTarget("fillSquare");
    }
    if (paletteType === "hstUp" && swatchesGroup === "1") {
      setColorTarget("fillHstLup");
    }
    if (paletteType === "hstUp" && swatchesGroup === "2") {
      setColorTarget("fillHstRup");
    }
    if (paletteType === "hstDown" && swatchesGroup === "1") {
      setColorTarget("fillHstLdown");
    }
    if (paletteType === "hstDown" && swatchesGroup === "2") {
      setColorTarget("fillHstRdown");
    }
    if (paletteType === "sashColumn" && swatchesGroup === "1") {
      setColorTarget("fillSashing");
    }
    if (paletteType === "sashRow" && swatchesGroup === "1") {
      setColorTarget("fillSashing");
    }
    if (paletteType === "rectSashing" && swatchesGroup === "1") {
      setColorTarget("fillSashing");
    }
    if (paletteType === "bigBlockCol2" && swatchesGroup === "1") {
      setColorTarget("color1");
    }
    if (paletteType === "bigBlockCol2" && swatchesGroup === "2") {
      setColorTarget("color2");
    }
    if (paletteType === "bigBlockCol3" && swatchesGroup === "1") {
      setColorTarget("color1");
    }
    if (paletteType === "bigBlockCol3" && swatchesGroup === "2") {
      setColorTarget("color2");
    }
    if (paletteType === "bigBlockCol3" && swatchesGroup === "3") {
      setColorTarget("color3");
    }
    if (paletteType === "border" && swatchesGroup === "1") {
      setColorTarget("background");
    }
  }, [paletteType, swatchesGroup]);

  const pickColor = (pickedColor) => {
    if (paletteType === "sashColumn") {
      editSquares({
        rowCol: "col",
        id: rowColId,
        propertyKey: colorTarget,
        propertyValue: pickedColor,
      });
      let newSashingColsColor = sashingColsColor.map((sashColor, index) => {
        return index === rowColId ? (sashColor = pickedColor) : sashColor;
      });
      updateSashingColsColor(newSashingColsColor);
    } else if (paletteType === "sashRow") {
      editSquares({
        rowCol: "row",
        id: rowColId,
        propertyKey: colorTarget,
        propertyValue: pickedColor,
      });
      let newSashingRowsColor = sashingRowsColor.map((sashColor, index) => {
        return index === rowColId ? (sashColor = pickedColor) : sashColor;
      });
      updateSashingRowsColor(newSashingRowsColor);
    } else if (paletteType === "border" && pickedColor !== "") {
      editBorderColor({
        bPos: borderPos,
        background: pickedColor,
      });
    } else if (
      paletteType === "bigBlockCol2" ||
      paletteType === "bigBlockCol3"
    ) {
      let insIndex = insertedBigBlocks.indexOf(
        insertedBigBlocks.find((block) => block.anchorSquare === squareId)
      );
      let colorTargetProp = colorTarget;
      editInsertedBigBlock({
        ...insertedBigBlocks[insIndex],
        [colorTargetProp]: pickedColor,
      });
    } else {
      editSquare({
        id: squareId,
        propertyKey: colorTarget,
        propertyValue: pickedColor,
      });
    }
  };

  const swatches = paletteColors.map((paletteColor, index) => (
    <button
      className={`swatch swatch-${index}`}
      style={{ background: `${paletteColor}` }}
      key={index}
      onClick={() => pickColor(paletteColor)}
    />
  ));
  return (
    <div className="swatches-group">
      <div className="swatches-title">{swatchesTitle}</div>
      <div className="swatches">{swatches}</div>
    </div>
  );
};

export default Swatches;

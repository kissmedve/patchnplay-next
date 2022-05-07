import React, { useContext } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";

const DeleteColumn = ({ colId, squareWidth, param }) => {
  // global states
  const {
    squares,
    cols,
    sashingCols,
    sashingWidths,
    updateSquares,
    updateCols,
    updateSashingCols,
    updateSashingWidths,
    insertedBigBlocks,
    updateInsertedBigBlocks,
    sashingColsColor,
    updateSashingColsColor,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);

  const deleteThisColumn = (colId) => {
    // don't remove column, if it has "covered" squares (BigBlock sitting on them)
    let dontRemove = 0;
    squares.map((squs, i) => {
      return squs
        .filter((squ) => squ.col === colId)
        .forEach((squ) =>
          squ.covered === true ? (dontRemove += 1) : (dontRemove += 0)
        );
    });

    // never remove the last existing column
    if (dontRemove === 0 && cols.length > 1) {
      // remove one col for colhead rendering
      const newCols = cols.slice(0, cols.length - 1);

      // remove the indicated column
      const newSashingCols = [
        ...sashingCols.slice(0, colId),
        ...sashingCols.slice(colId + 1),
      ];
      const newSashingWidths = [
        ...sashingWidths.slice(0, colId),
        ...sashingWidths.slice(colId + 1),
      ];
      const newSashingColsColor = [
        ...sashingColsColor.slice(0, colId),
        ...sashingColsColor.slice(colId + 1),
      ];

      // prepare squares for update

      // remove the indicated column
      let squarez = squares.map((squs) => {
        return squs.filter((squ) => squ.col !== colId);
      });

      // close the gap
      for (let i = 0; i < squarez.length; i++) {
        for (let k = 0; k < squarez[0].length; k++) {
          squarez[i][k].col =
            squarez[i][k].col > colId
              ? squarez[i][k].col - 1
              : squares[i][k].col;
          squarez[i][k].id =
            squarez[i][k].col > colId - 1 ? i + "-" + k : squarez[i][k].id;
        }
      }

      // adjust BigBlock position (anchorSquares)
      let newInsertedBigBlocks = insertedBigBlocks.map((block) => {
        let anchorSplit = block.anchorSquare.split("-");
        anchorSplit = [parseInt(anchorSplit[0]), parseInt(anchorSplit[1])];
        anchorSplit[1] =
          anchorSplit[1] >= colId ? anchorSplit[1] - 1 : anchorSplit[1];
        let newAnchorSquare = [anchorSplit[0], anchorSplit[1]].join("-");
        return {
          ...block,
          anchorSquare: newAnchorSquare,
        };
      });

      updateSquares(squarez);
      updateCols(newCols);
      updateSashingCols(newSashingCols);
      updateSashingWidths(newSashingWidths);
      updateInsertedBigBlocks(newInsertedBigBlocks);
      updateSashingColsColor(newSashingColsColor);
    }
  };

  return (
    <>
      <button
        className="squares-settings delete-column"
        style={{ width: sashingWidths[colId] * squareWidth }}
        onClick={() => deleteThisColumn(colId)}
      >
        <span>Delete Column</span>
      </button>
    </>
  );
};

export default DeleteColumn;

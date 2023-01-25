import React, { useContext } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";

const AddRow = ({ rowId, squareWidth, param }) => {
  // global states
  const {
    squares,
    rows,
    sashingCols,
    sashingRows,
    sashingHeights,
    updateSquares,
    updateRows,
    updateSashingRows,
    updateSashingHeights,
    insertedBigBlocks,
    updateInsertedBigBlocks,
    sashingRowsColor,
    updateSashingRowsColor,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);

  // row is always added below the clicked one
  // default new row is:
  // individual squares (not sashing), squareType 'rect', #ffffff

  const addRowDown = (rowId) => {
    // don't add row, if the clicked one AND the one below share a BigBlock sitting on them
    let squsCovered = 0;

    let currentSqus = squares.find((squs, index) => rowId === index);

    currentSqus.forEach((currentSqu) => {
      if (currentSqu.covered === true) {
        let coveringBigBlock = insertedBigBlocks.find(
          (ins) => ins.anchorSquare === currentSqu.bigBlockAnchor
        );
        let covAnchorRow = parseInt(
          coveringBigBlock.anchorSquare.split("-")[0]
        );
        if (
          currentSqu.row <
          covAnchorRow + parseInt(coveringBigBlock.stretchSquares) - 1
        ) {
          squsCovered += 1;
        }
      }
    });

    if (squsCovered === 0) {
      // add row for rowhead rendering
      const newRows = [...rows, rows.length];

      // insert default values for new row
      const newSashingRows = [
        ...sashingRows.slice(0, rowId + 1),
        false,
        ...sashingRows.slice(rowId + 1),
      ];
      const newSashingHeights = [
        ...sashingHeights.slice(0, rowId + 1),
        1,
        ...sashingHeights.slice(rowId + 1),
      ];
      const newSashingRowsColor = [
        ...sashingRowsColor.slice(0, rowId + 1),
        "#ffffff",
        ...sashingRowsColor.slice(rowId + 1),
      ];

      // prepare squares for update

      let squarez = squares;

      // make room for new row

      for (let i = 0; i < squarez.length; i++) {
        for (let k = 0; k < squarez[0].length; k++) {
          squarez[i][k].row =
            squarez[i][k].row > rowId
              ? squarez[i][k].row + 1
              : squarez[i][k].row;
          squarez[i][k].id =
            squarez[i][k].row > rowId ? i + 1 + "-" + k : squarez[i][k].id;
          // shift anchor location of any BigBlock below the new row
          if (squarez[i][k].row > rowId && squarez[i][k].covered === true) {
            let anchorSplit = squarez[i][k].bigBlockAnchor.split("-");
            anchorSplit[0] = parseInt(anchorSplit[0]) + 1;
            let rejoinedAnchor = anchorSplit.join("-");
            squarez[i][k].bigBlockAnchor = rejoinedAnchor;
          }
        }
      }

      // build new row
      let newRow = [];
      for (let k = 0; k < squarez[0].length; k++) {
        newRow.push({
          id: `${rowId + 1}-${k}`,
          row: rowId + 1,
          col: k,
          squareType: "rect",
          fillSquare: "#ffffff",
          fillSashing:
            sashingCols[k] === true ? squares[0][k].fillSashing : "#ffffff",
          fillHstLup: "#ffffff",
          fillHstRup: "#ffffff",
          fillHstLdown: "#ffffff",
          fillHstRdown: "#ffffff",
          covered: false,
          bigBlockAnchor: "",
          sashing: sashingCols[k] === true ? true : false,
          sashingCrossed: false,
          sashingWidth:
            sashingCols[k] === true ? squares[rowId][k].sashingWidth : 1,
          sashingHeight: 1,
        });
      }

      squarez = [
        ...squarez.slice(0, rowId + 1),
        newRow,
        ...squarez.slice(rowId + 1),
      ];

      // adjust BigBlock position (anchorSquares)
      let newInsertedBigBlocks = insertedBigBlocks.map((block) => {
        let anchorSplit = block.anchorSquare.split("-");
        anchorSplit = [parseInt(anchorSplit[0]), parseInt(anchorSplit[1])];
        anchorSplit[0] =
          anchorSplit[0] > rowId ? anchorSplit[0] + 1 : anchorSplit[0];
        let newAnchorSquare = [anchorSplit[0], anchorSplit[1]].join("-");
        return {
          ...block,
          anchorSquare: newAnchorSquare,
        };
      });

      updateSquares(squarez);
      updateRows(newRows);
      updateSashingRows(newSashingRows);
      updateSashingHeights(newSashingHeights);
      updateInsertedBigBlocks(newInsertedBigBlocks);
      updateSashingRowsColor(newSashingRowsColor);
    }
  };

  return (
    <>
      <button
        className="squares-settings add-row"
        style={{ height: sashingHeights[rowId] * squareWidth }}
        onClick={() => addRowDown(rowId)}
      >
        <span>Add Row</span>
      </button>
    </>
  );
};

export default AddRow;

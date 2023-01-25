import React, { useContext } from "react";
import { SquaresContext, SquaresContextDemo } from "./SquaresContext";
import elementBlocks from "../data/elementBlocks";
import SVGPath from "./SVGPath";

const PrintableSquaresGrid = ({ param }) => {
  // global states
  const {
    squares,
    insertedBigBlocks,
    borders,
    squareWidth,
    sashingWidths,
    sashingHeights,
    borderBaseWidth,
  } = useContext(param === "demo" ? SquaresContextDemo : SquaresContext);

  // offset of squares grid from outmost border
  const left =
    borders
      .map((border) => border.widthLeft)
      .reduce((acc, val) => acc + val, 0) * borderBaseWidth;
  const top =
    borders
      .map((border) => border.widthTop)
      .reduce((acc, val) => acc + val, 0) * borderBaseWidth;

  // cumulated width and height of squares grid
  const squGridWith =
    sashingWidths.reduce((acc, val) => acc + val, 0) * squareWidth;
  const squGridHeight =
    sashingHeights.reduce((acc, val) => acc + val, 0) * squareWidth;

  // cumulated widths and heights of border "boxes"
  let borderWidths = borders.map(
    (border) => (border.widthLeft + border.widthRight) * borderBaseWidth
  );
  borderWidths.push(squGridWith);

  const cumBWidths = borders.map((border, i) => {
    return borderWidths
      .slice(i, borderWidths.length)
      .reduce((acc, val) => acc + val, 0);
  });

  let borderHeights = borders.map(
    (border) => (border.widthTop + border.widthBottom) * borderBaseWidth
  );
  borderHeights.push(squGridHeight);

  const cumBHeights = borders.map((border, i) => {
    return borderHeights
      .slice(i, borderHeights.length)
      .reduce((acc, val) => acc + val, 0);
  });

  // cumulated width and height border offsets
  const borderLeftOffsets = borders.map((border) => border.widthLeft);

  const cumBLeftOffsets = borderLeftOffsets.map((offset, i) => {
    return (
      borderLeftOffsets.slice(0, i).reduce((acc, val) => acc + val, 0) *
      borderBaseWidth
    );
  });

  const borderTopOffsets = borders.map((border) => border.widthTop);

  const cumBTopOffsets = borderTopOffsets.map((offset, i) => {
    return (
      borderTopOffsets.slice(0, i).reduce((acc, val) => acc + val, 0) *
      borderBaseWidth
    );
  });

  // cumulated widths and heights squares offsets
  const calcOffsets = (column, row) => {
    let widthOffset =
      sashingWidths.slice(0, column).reduce((acc, val) => acc + val, 0) *
        squareWidth +
      left;
    let heightOffset =
      sashingHeights.slice(0, row).reduce((acc, val) => acc + val, 0) *
        squareWidth +
      top;
    return [widthOffset, heightOffset];
  };

  // paths for squares and HSTs
  const pathDataSquare = (
    data,
    sizeFactor = 1,
    offsetLeft = 0,
    offsetTop = 0
  ) => {
    let pathData = [
      "M",
      data[0][0] * sizeFactor + offsetLeft,
      data[0][1] * sizeFactor + offsetTop,
      "L",
      data[1][0] * sizeFactor + offsetLeft,
      data[1][1] * sizeFactor + offsetTop,
      "L",
      data[2][0] * sizeFactor + offsetLeft,
      data[2][1] * sizeFactor + offsetTop,
      "L",
      data[3][0] * sizeFactor + offsetLeft,
      data[3][1] * sizeFactor + offsetTop,
      "Z",
    ];
    return pathData.join(" ");
  };

  const pathDataTriangle = (
    data,
    sizeFactor = 1,
    offsetLeft = 0,
    offsetTop = 0
  ) => {
    let pathData = [
      "M",
      data[0][0] * sizeFactor + offsetLeft,
      data[0][1] * sizeFactor + offsetTop,
      "L",
      data[1][0] * sizeFactor + offsetLeft,
      data[1][1] * sizeFactor + offsetTop,
      "L",
      data[2][0] * sizeFactor + offsetLeft,
      data[2][1] * sizeFactor + offsetTop,
      "Z",
    ];
    return pathData.join(" ");
  };

  // square and HST functions

  const SquarePaths = ({ row, col, sashWidth, sashHeight, fillColor }) => {
    let width = squareWidth * sashWidth;
    let height = squareWidth * sashHeight;
    let vertices = [
      [0, 0],
      [width, 0],
      [width, height],
      [0, height],
    ];
    let pathDataSqu = pathDataSquare(
      vertices,
      1,
      calcOffsets(col, row)[0],
      calcOffsets(col, row)[1]
    );

    return <path d={pathDataSqu} fill={fillColor} />;
  };

  const HSTUpPaths = ({ row, col, fillColorLeft, fillColorRight }) => {
    let width = squareWidth;
    let height = squareWidth;
    let verticesLeft = [
      [0, 0],
      [width, 0],
      [0, height],
    ];
    let verticesRight = [
      [width, 0],
      [width, height],
      [0, height],
    ];

    let pathDataLeft = pathDataTriangle(
      verticesLeft,
      1,
      calcOffsets(col, row)[0],
      calcOffsets(col, row)[1]
    );
    let pathDataRight = pathDataTriangle(
      verticesRight,
      1,
      calcOffsets(col, row)[0],
      calcOffsets(col, row)[1]
    );

    return (
      <>
        <path d={pathDataLeft} fill={fillColorLeft} />
        <path d={pathDataRight} fill={fillColorRight} />
      </>
    );
  };

  const HSTDownPaths = ({ row, col, fillColorLeft, fillColorRight }) => {
    let width = squareWidth;
    let height = squareWidth;
    let verticesLeft = [
      [0, 0],
      [width, height],
      [0, height],
    ];
    let verticesRight = [
      [0, 0],
      [width, 0],
      [width, height],
    ];

    let pathDataLeft = pathDataTriangle(
      verticesLeft,
      1,
      calcOffsets(col, row)[0],
      calcOffsets(col, row)[1]
    );
    let pathDataRight = pathDataTriangle(
      verticesRight,
      1,
      calcOffsets(col, row)[0],
      calcOffsets(col, row)[1]
    );

    return (
      <>
        <path d={pathDataLeft} fill={fillColorLeft} />
        <path d={pathDataRight} fill={fillColorRight} />
      </>
    );
  };

  // draw squares grid

  const squaresGrid = squares.map((squs, rowIndex) => {
    return squs.map((squ, colIndex) => {
      if (squ.squareType === "rect" || squ.sashing === true) {
        let fillColor = squ.sashing === true ? squ.fillSashing : squ.fillSquare;
        return (
          <SquarePaths
            row={squ.row}
            col={squ.col}
            sashWidth={squ.sashingWidth}
            sashHeight={squ.sashingHeight}
            fillColor={fillColor}
            key={rowIndex + "-" + colIndex}
          />
        );
      } else if (squ.squareType === "hstUp") {
        return (
          <HSTUpPaths
            row={squ.row}
            col={squ.col}
            fillColorLeft={squ.fillHstLup}
            fillColorRight={squ.fillHstRup}
            key={rowIndex + "-" + colIndex}
          />
        );
      } else if (squ.squareType === "hstDown") {
        return (
          <HSTDownPaths
            row={squ.row}
            col={squ.col}
            fillColorLeft={squ.fillHstLdown}
            fillColorRight={squ.fillHstRdown}
            key={rowIndex + "-" + colIndex}
          />
        );
      } else {
        return null;
      }
    });
  });

  // draw borders

  const bordersBox = borders.map((border, i) => {
    let path = [
      "M",
      cumBLeftOffsets[i],
      cumBTopOffsets[i],
      "L",
      cumBLeftOffsets[i] + cumBWidths[i],
      cumBTopOffsets[i],
      "L",
      cumBLeftOffsets[i] + cumBWidths[i],
      cumBTopOffsets[i] + cumBHeights[i],
      "L",
      cumBLeftOffsets[i],
      cumBTopOffsets[i] + cumBHeights[i],
      "Z",
    ].join(" ");
    let bg = border.background;
    return <path key={i} d={path} fill={bg}></path>;
  });

  // draw inserted BigBlocks

  const bigBlocks = insertedBigBlocks.map((insBlock, i) => {
    let anchor = insBlock.anchorSquare.split("-");
    let widthOffset =
      sashingWidths.slice(0, anchor[1]).reduce((acc, val) => acc + val, 0) *
        squareWidth +
      left;
    let heightOffset =
      sashingHeights.slice(0, anchor[0]).reduce((acc, val) => acc + val, 0) *
        squareWidth +
      top;
    const resizing = insBlock.stretchSquares / insBlock.rowCol;

    let eleBlock = elementBlocks.find(
      (block) => block.id === insBlock.elementBlocksId
    );

    let renderedPaths = eleBlock.paths.map((path, index) => (
      <SVGPath
        vertices={path.vertices}
        fillColor={path.fillColor}
        color1={insBlock.color1}
        color2={insBlock.color2}
        color3={insBlock.color3}
        key={index}
        rotated={insBlock.rotated}
        rowCol={insBlock.rowCol}
        squareWidth={squareWidth}
      />
    ));

    return (
      <svg
        key={insBlock.anchorSquare}
        viewBox={`0 0 ${eleBlock.rowCol * squareWidth} ${
          eleBlock.rowCol * squareWidth
        }`}
        x={widthOffset}
        y={heightOffset}
        width={insBlock.stretchSquares * squareWidth}
        height={insBlock.stretchSquares * squareWidth}
      >
        {renderedPaths}
      </svg>
    );
  });

  const viewBoxStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div
        className="preview"
        style={{
          position: "relative",
          height: "calc(90vh - 85px)",
        }}
      >
        <svg
          viewBox={`0 0 ${cumBWidths[0]} ${cumBHeights[0]} `}
          style={viewBoxStyle}
        >
          {bordersBox}
          {squaresGrid}
          {bigBlocks}
        </svg>
      </div>
    </>
  );
};

export default PrintableSquaresGrid;

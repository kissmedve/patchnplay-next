import React from "react";

const SVGPath = ({
  vertices,
  fillColor,
  color1,
  color2,
  color3,
  rotated,
  rowCol,
  squareWidth,
}) => {
  let newFillColor = "";
  switch (fillColor) {
    case "color1":
      newFillColor = color1;
      break;
    case "color2":
      newFillColor = color2;
      break;
    case "color3":
      newFillColor = color3;
      break;
    default:
      newFillColor = "#ddd";
  }

  // rotated 0: ( x | y )
  // rotated 90: ( blockWidth - y | x )
  // rotated 180: ( blockWidth - x | blockWidth - y )
  // rotated 270: ( y | blockWidth - x )

  // blockWidth
  let bw = Number(rowCol) * squareWidth;

  let pathData = [];
  // square path as standard
  if (vertices.length === 4) {
    switch (Number(rotated)) {
      case 90:
        pathData = [
          "M",
          bw - vertices[0][1],
          vertices[0][0],
          "L",
          bw - vertices[1][1],
          vertices[1][0],
          "L",
          bw - vertices[2][1],
          vertices[2][0],
          "L",
          bw - vertices[3][1],
          vertices[3][0],
        ];
        break;
      case 180:
        pathData = [
          "M",
          bw - vertices[0][0],
          bw - vertices[0][1],
          "L",
          bw - vertices[1][0],
          bw - vertices[1][1],
          "L",
          bw - vertices[2][0],
          bw - vertices[2][1],
          "L",
          bw - vertices[3][0],
          bw - vertices[3][1],
        ];
        break;
      case 270:
        pathData = [
          "M",
          vertices[0][1],
          bw - vertices[0][0],
          "L",
          vertices[1][1],
          bw - vertices[1][0],
          "L",
          vertices[2][1],
          bw - vertices[2][0],
          "L",
          vertices[3][1],
          bw - vertices[3][0],
        ];
        break;
      default:
        pathData = [
          "M",
          vertices[0][0],
          vertices[0][1],
          "L",
          vertices[1][0],
          vertices[1][1],
          "L",
          vertices[2][0],
          vertices[2][1],
          "L",
          vertices[3][0],
          vertices[3][1],
        ];
    }
  }

  // 1 less point, if path is triangle
  if (vertices.length === 3) {
    switch (Number(rotated)) {
      case 90:
        pathData = [
          "M",
          bw - vertices[0][1],
          vertices[0][0],
          "L",
          bw - vertices[1][1],
          vertices[1][0],
          "L",
          bw - vertices[2][1],
          vertices[2][0],
        ];
        break;
      case 180:
        pathData = [
          "M",
          bw - vertices[0][0],
          bw - vertices[0][1],
          "L",
          bw - vertices[1][0],
          bw - vertices[1][1],
          "L",
          bw - vertices[2][0],
          bw - vertices[2][1],
        ];
        break;
      case 270:
        pathData = [
          "M",
          vertices[0][1],
          bw - vertices[0][0],
          "L",
          vertices[1][1],
          bw - vertices[1][0],
          "L",
          vertices[2][1],
          bw - vertices[2][0],
        ];
        break;
      default:
        pathData = [
          "M",
          vertices[0][0],
          vertices[0][1],
          "L",
          vertices[1][0],
          vertices[1][1],
          "L",
          vertices[2][0],
          vertices[2][1],
        ];
    }
  }
  // close shape
  pathData.push("Z");

  let pathDataJoined = pathData.join(" ");

  return (
    <path
      className={fillColor}
      d={pathDataJoined}
      fill={newFillColor}
      stroke="transparent"
    />
  );
};

export default SVGPath;

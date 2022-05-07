import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./PrintFabricsRequirement";

const DrawFabrics = ({ drawPacks }) => {
  return (
    <>
      {drawPacks
        ? drawPacks.map((pack) => {
            return (
              <div key={`pack-${pack[0]}`}>
                <div className="test">test</div>
                {/* colour heading */}
                <div style={{ marginTop: "1.5rem" }}>
                  <span
                    style={{
                      height: "1.4rem",
                      width: "4rem",
                      background: `${pack[0]}`,
                      display: "inline-block",
                      marginRight: "0.5rem",
                    }}
                  ></span>
                </div>
                {/* pack details */}
                <div style={{ marginBottom: "0.5rem" }}>
                  Color: {pack[0]} <br />
                  Fabric width: {pack[3]} cm <br />
                  Required height: {pack[1]} cm
                </div>

                <svg viewBox={`0 0 140 ${pack[1]}`}>
                  <g>
                    {/* fabric total width x height */}
                    <path
                      d={`M 0 0 L ${pack[3]} 0 L ${pack[3]} ${pack[1]} L 0 ${pack[1]} Z`}
                      stroke="#666"
                      strokeWidth="0.2"
                      fill="#eee"
                      key="background"
                    />
                    {/* collection pieces */}
                    {pack[2].map((p, i) => {
                      return (
                        <path
                          d={p}
                          stroke="black"
                          fill="white"
                          strokeWidth="0.2"
                          key={`path-${i}`}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
            );
          })
        : null}
      <button className="print btn styler-btn">
        <PDFDownloadLink document={<PdfDocument drawPacks={drawPacks} />}>
          Download Fabric Requirements
        </PDFDownloadLink>
      </button>
    </>
  );
};

export default DrawFabrics;

import React from "react";
import Image from "next/image";
import pnpSpinner from "../public/icons/pnp-spinner.svg";

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div id="spinner">
        <Image src={pnpSpinner} className="img-responsive" alt="Spinner" />
      </div>
    </div>
  );
}

export default Spinner;

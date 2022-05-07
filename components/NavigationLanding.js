import React, { useState, useContext } from "react";
import Link from "next/link";

const NavigationLanding = () => {
  // local states
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <section
        id="topnav"
        className={openMobileMenu === true ? `active` : null}
      >
        <div
          id="toggler"
          className={openMobileMenu === true ? `toggled` : null}
        >
          <button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link href="/app">Start Designing</Link>
          </li>
          <li className="nav-item">
            <Link href="/app?show=demo">Play with Demo</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default NavigationLanding;

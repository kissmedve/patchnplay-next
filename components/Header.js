import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <>
      <header id="header">
        <div className="navbar">
          <section id="logo">
            <Link href="/">
              <a>
                <Image
                  src="/patchnplay_logo-4.svg"
                  alt="PatchNPlay"
                  width="139"
                  height="41"
                />
              </a>
            </Link>
          </section>
          {children}
        </div>
      </header>
    </>
  );
};

export default Header;

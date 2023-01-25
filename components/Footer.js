import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footernav">
          <ul>
            <li>
              <Link href="/app">App</Link>
            </li>
            <li>
              <Link href="/app?show=demo">Demo</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/legal">Legal Notice</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

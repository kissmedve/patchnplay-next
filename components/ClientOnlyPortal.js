import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ClientOnlyPortal = ({ children, selector }) => {
  // refs
  const ref = useRef();
  // local states
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;

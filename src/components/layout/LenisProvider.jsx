import Lenis from "lenis";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import "lenis/dist/lenis.css";

const LenisContext = createContext(null);

export function useLenisInstance() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children, options = {} }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.15,
      syncTouch: true,
      ...options,
    });
    setLenis(instance);

    let frame;
    const raf = (time) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

LenisProvider.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object,
};

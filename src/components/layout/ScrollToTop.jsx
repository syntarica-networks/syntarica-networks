import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenisInstance } from "./LenisProvider";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenisInstance();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenis]);

  return null;
}

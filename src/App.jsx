import "./App.css";
import ReactLenis from "@studio-freight/react-lenis";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15,
        syncTouch: true,
      }}
    >
      <ScrollToTop />
      <div className="relative w-full">
        <div className="absolute z-20 w-full">
          <Header />
        </div>
        <Outlet />
      </div>
    </ReactLenis>
  );
}

export default App;

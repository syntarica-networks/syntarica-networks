import "./App.css";
import Header from "./components/layout/Header";
import LenisProvider from "./components/layout/LenisProvider";
import ScrollToTop from "./components/layout/ScrollToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <div className="relative w-full">
        <div className="absolute z-20 w-full">
          <Header />
        </div>
        <Outlet />
      </div>
    </LenisProvider>
  );
}

export default App;

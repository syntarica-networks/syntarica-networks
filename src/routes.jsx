import App from "./App";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Services from "./pages/Services";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/clients", element: <Clients /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export { routes };

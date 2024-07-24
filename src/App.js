import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop/>
      <div className="outlet-background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

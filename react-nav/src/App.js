/* eslint-disable */

import { useState } from "react";
import Navbar from "./components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const closeNavbar = () => {
    setShowNav(false);
  };

  return (
    <div className="App">
      <header onClick={toggleNavbar}>
        <GiHamburgerMenu />
      </header>
      <div className="close_btn" onClick={closeNavbar}>
        <FaHamburger />
      </div>

      <Navbar show={showNav} />
    </div>
  );
}
export default App;

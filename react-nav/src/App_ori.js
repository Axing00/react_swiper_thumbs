/* eslint-disable */

import { useState } from "react";
import Navbar from "./components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import "./App.css";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu />
      </header>
      <div className="close_btn">
        <FaHamburger />
      </div>

      <Navbar show={showNav} />
    </div>
  );
}
export default App;

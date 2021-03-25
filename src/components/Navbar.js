import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  // const handleMenuBar = () => {
  //   const menu = document.querySelector(".menu-list");
  //   menu.style.display === ""
  //     ? (menu.style.display = "none")
  //     : (menu.style.display = "");
  // };

  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="navbar">
        <p>
          Jaydon<span className="bold">Arcand</span>
        </p>
        <div className="right-navbar">
          <div className="menu-list">
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>
          <Link to="/works">
            <span>
              <i class="fas fa-briefcase"></i>
            </span>{" "}
            my works
          </Link>
          <button className="button-bars" onClick={() => setOpen(!open)}>
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </Router>
  );
}
export default Navbar;

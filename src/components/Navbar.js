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
    <div className="navbar">
      <p>
        Jaydon<span className="bold">Arcand</span>
      </p>
      <div className="right-navbar">
        <div className="menu-list">
          <a href="./Contact.js">Contact</a>
          <a href="./About.js">About</a>
        </div>
        <button>
          <span>
            <i class="fas fa-briefcase"></i>
          </span>{" "}
          my works
        </button>
        <button className="button-bars" onClick={() => setOpen(!open)}>
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
}
export default Navbar;

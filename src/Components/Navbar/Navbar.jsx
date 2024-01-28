import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav>
        <button>Home</button>
        <button>Products</button>
        <button>About</button>
        <button>Contact</button>
        <button><FaShoppingCart /></button>
      </nav>
    </>
  );
};

export default Navbar;

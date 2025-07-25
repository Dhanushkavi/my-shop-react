// // src/components/Header.jsx
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Header = () => {
//   const { cartItems } = useCart();

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header className="header">
//       <h1><Link to="/">🛍️ MyShop</Link></h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart ({totalItems})</Link>
//         <Link to="/Login">Logout</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">🛍️ MyShop</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* <Link to="/">Home</Link> */}
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Logout</Link>
        {/* Add more links as needed */}
      </nav>

      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;

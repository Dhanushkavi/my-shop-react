import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import "./App.css";
import NotFound from "./NotFound";

// Wrap AppRoutes with location access
const AppRoutes = () => {
  const location = useLocation();
  
  // Define paths where you don't want to show Header
  const noHeaderPaths = ["/login", "/register"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

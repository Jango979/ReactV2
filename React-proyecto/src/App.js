import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Sidebar from "./components/Sidebar";
import Inicio from "./Routes/Inicio";
//import Franquicias from "./Routes/Franquicias";
import Anime from "./Routes/Anime";
//import Videojuegos from "./Routes/Videojuegos";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const Content = () => {
    const location = useLocation();
    const isHome = location.pathname === '/inicio';

    return (
      <React.Fragment>
        <Navbar setShow={setShow} size={cart.length} />

        {!isHome && (
          show ? (
            <Amazon handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )
        )}
      </React.Fragment>
    );
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/anime" element={<Anime />} />
        {/* <Route path="/franquicias" element={<Franquicias />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/videojuegos" element={<Videojuegos />} /> */}
      </Routes>

      <Content />
    </Router>
  );
};

export default App;

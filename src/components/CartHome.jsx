import React from "react";
import Navbar from "./navbar";
import "../styles/cart.css";
import { Routes, Route, Link } from "react-router-dom";
const CartHome = () => {
  // const listdata = listTwo.map((inner) => inner.id + inner.img + inner.title);
  return (
    <>
      <Navbar />
      <div className="hero-menu">
        <div>
          <Link to="HomeCard">
            <img
              src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg"
              alt=""
              style={{ width: "235px" }}
            />
          </Link>
          <h6 style={{ textAlign: "center" }}>Pizzas</h6>
        </div>
        <div>
          <Link to="HomeCardTwo">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg"
              alt=""
              style={{ width: "235px" }}
            />
          </Link>
          <h6 style={{ textAlign: "center" }}>Burger</h6>
        </div>
        {/* <h1>(inner._id)</h1> */}
      </div>
    </>
  );
};
export default CartHome;

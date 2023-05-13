import React from "react";
import Bannar from "../Bannar/Bannar";
import About from "../About/About";
import Services from "../Services/Services";
import ShopOpen from "../ShopOpen/ShopOpen";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Bannar></Bannar>
      <About></About>
      <Services></Services>
      <ShopOpen></ShopOpen>
      <Products></Products>
    </>
  );
};

export default Home;

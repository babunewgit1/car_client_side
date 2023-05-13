import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section id="products" className="py-28">
      <div className="mycontainer">
        <Heading
          subHeading="Popular Products"
          heading="Browse Our Products"
          para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        ></Heading>
        <div className="productDetails grid grid-cols-3 gap-6 mt-14">
          {products.map((product) => {
            return (
              <div
                key={product._id}
                className="productItem text-center border border-gray-300 rounded-md overflow-hidden p-5"
              >
                <img src={product?.img} alt="product images" />
                <div className="reactReating mt-6">
                  <Rating
                    readOnly
                    style={{ maxWidth: 150 }}
                    className="mx-auto"
                    value={Math.round(product?.rating)}
                  />
                </div>
                <h3 className="font-semibold text-2xl mt-2">{product?.name}</h3>
                <p className="text-xl text-[#FF3811] font-semibold mt-2">
                  ${product?.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;

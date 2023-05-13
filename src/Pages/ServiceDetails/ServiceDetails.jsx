import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Bannar from "../Shared/Bannar/Bannar";

const ServiceDetails = () => {
  const data = useLoaderData();

  return (
    <div className="server">
      <Bannar heading={data.title}></Bannar>
      <div className="service pb-20">
        <div className="serviceImg">
          <div className="mycontainer">
            <div className="serviceImgWarpper mt-16">
              <h2 className="text-4xl font-semibold mb-7 text-center">
                {data.title}
              </h2>
              <img
                className="block w-full h-[450px] object-cover rounded-md"
                src={data.img}
                alt="service images"
              />
              <p className="text-left mt-5 text-xl">{data.description}</p>
              <p className="text-red-500 font-semibold text-xl my-4">
                Pirce: {data.price}
              </p>
              <Link
                className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                to={`/checkout/${data._id}`}
              >
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <section id="services" className="pt-28">
      <div className="mycontainer">
        <div className="servicesWrapper">
          <Heading
            subHeading="Service"
            heading="Our Service Area"
            para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          ></Heading>
        </div>
        <div className="servicesList mt-14 grid grid-cols-3 gap-5">
          {services.map((service) => {
            return (
              <div
                key={service?._id}
                className="serviceItems border border-gray-300 rounded-md overflow-hidden p-5"
              >
                <img
                  className="block w-full rounded-md h-[230px] object-cover"
                  src={service?.img}
                  alt="services images"
                />
                <h4 className="font-semibold text-2xl mt-4">
                  {service?.title}
                </h4>
                <div className="serviceDetails flex items-center justify-between mt-3">
                  <p className="font-semibold text-[#FF3811] text-xl">
                    Price : ${service?.price}
                  </p>
                  <Link
                    className="text-[#FF3811] inline-block hover:opacity-70"
                    to={`/service/${service?._id}`}
                  >
                    <FaArrowRight></FaArrowRight>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

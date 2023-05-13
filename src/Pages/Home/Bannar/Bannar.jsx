import React from "react";
import slide1 from "../../../Assets/1.jpg";
import slide2 from "../../../Assets/2.jpg";
import slide3 from "../../../Assets/3.jpg";
import slide4 from "../../../Assets/4.jpg";
import slide5 from "../../../Assets/5.jpg";
import slide6 from "../../../Assets/6.jpg";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <section id="bannar">
      <div className="mycontainer">
        <div className="bannarWrapper">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide1}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide6" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide2}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide3}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide4}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide5"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide5}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link
                        className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide6" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide6"
              className="carousel-item relative w-full rounded-md overflow-hidden"
            >
              <img
                className="h-[550px] rounded-md object-cover w-full"
                src={slide6}
              />
              <div className="bannartext absolute w-full h-full flex items-center">
                <div className="bannarContent w-[460px] space-y-5 ml-16">
                  <h2 className="text-white text-6xl font-bold leading-[1.3]">
                    Affordable Price For Car Servicing
                  </h2>
                  <p className="text-white">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                  <ul className="flex gap-6">
                    <li>
                      <Link className="redbutton" to="/">
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white border-2 duration-75 hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-3 px-6 inline-block rounded-sm"
                        to="/"
                      >
                        Latest Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute flex justify-end gap-6 right-5 bottom-[50px]">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;

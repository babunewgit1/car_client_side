import React from "react";
import parts from "../../../Assets/parts.jpg";
import person from "../../../Assets/person.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="mycontainer">
        <div className="aboutWrapper grid grid-cols-2 gap-11 items-center">
          <div className="aboutLeftcontent">
            <div className="aboutLeft relative">
              <img
                className="block w-full rounded-lg pr-20"
                src={person}
                alt="person imagers"
              />
              <img
                className="block absolute right-0 -bottom-16 w-[325px] border-[10px] border-white rounded-lg"
                src={parts}
                alt="person imagers"
              />
            </div>
          </div>
          <div className="aboutRight space-y-4">
            <h5 className="font-semibold text-[#FF3811] text-lg">About Us</h5>
            <h2 className="font-semibold text-5xl max-w-[420px] leading-[1.3]">
              We are qualified & of experience in this field
            </h2>
            <div className="aboutText text-[#737373] space-y-4">
              <p className="leading-[1.9]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p className="leading-[1.9]">
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </p>
              <Link className="redbutton" to="/">
                Get More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

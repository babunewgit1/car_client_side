import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import {
  FaGooglePlus,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-black p-10 ">
      <div className="mycontainer">
        <footer className="footer text-white py-8">
          <div>
            <Link to="/">
              <img src={logo} alt="logo images" />
            </Link>
            <p className="max-w-[250px] mt-3">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </p>
            <div className="socialLink mt-3">
              <ul>
                <li>
                  <a href="#">
                    <FaGooglePlus></FaGooglePlus>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin></FaLinkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <span className="font-bold uppercase text-xl text-white">
              Services
            </span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="font-bold uppercase text-xl text-white">
              Company
            </span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="font-bold uppercase text-xl text-white">
              Legal
            </span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import open1 from "../../../Assets/open1.svg";
import open2 from "../../../Assets/open2.svg";
import open3 from "../../../Assets/open3.svg";

const ShopOpen = () => {
  return (
    <section id="shopOnen" className="pt-28">
      <div className="mycontainer">
        <div className="shopOpenwrapper flex items-center justify-between bg-black text-white rounded-lg px-14 py-16">
          <div className="shopOneitem flex items-center gap-5">
            <div className="shopOneitemLeft">
              <img src={open1} alt="open1" />
            </div>
            <div className="shopOneitemRight">
              <p>We are open monday-friday</p>
              <h3 className="text-2xl font-semibold">7:00 am - 9:00 pm</h3>
            </div>
          </div>
          <div className="shopOneitem flex items-center gap-5">
            <div className="shopOneitemLeft">
              <img src={open2} alt="open1" />
            </div>
            <div className="shopOneitemRight">
              <p>Have a question?</p>
              <h3 className="text-2xl font-semibold">+2546 251 2658</h3>
            </div>
          </div>
          <div className="shopOneitem flex items-center gap-5">
            <div className="shopOneitemLeft">
              <img src={open3} alt="open1" />
            </div>
            <div className="shopOneitemRight">
              <p>Need a repair? our address</p>
              <h3 className="text-2xl font-semibold">Liza Street, New York</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopOpen;

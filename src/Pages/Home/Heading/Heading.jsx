import React from "react";

const Heading = ({ subHeading, heading, para }) => {
  return (
    <div className="heading text-center space-y-4">
      <h5 className="font-semibold text-[#FF3811] text-lg">{subHeading}</h5>
      <h2 className="font-semibold text-5xl ">{heading}</h2>
      <p className="text-[#737373] max-w-[700px] mx-auto">{para}</p>
    </div>
  );
};

export default Heading;

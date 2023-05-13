import React from "react";

const Bannar = ({ heading }) => {
  return (
    <div className="bannar" id="shared">
      <div className="mycontainer">
        <div className="bannarWrapper text-4xl font-semibold text-white">
          {heading}
        </div>
      </div>
    </div>
  );
};

export default Bannar;

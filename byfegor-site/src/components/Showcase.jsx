import React from "react";
import image1 from "../showcase/s-i-1.jpg";
import image2 from "../showcase/s-i-2.jpg";
import "./showcase.css";
function Showcase() {
  return (
    <div className="showcase">
      <img src={image1} alt="Extra Clothing" />
      <img src={image2} alt="Extra Clothing" />
    </div>
  );
}

export default Showcase;

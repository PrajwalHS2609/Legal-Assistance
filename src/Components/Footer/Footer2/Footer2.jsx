import React from "react";
import "./../Footer.css";
import tss from "./../../../Images/TSS.png";
const Footer2 = () => {
  return (
    <div className="footer2Container">
      <h3>Copyright © 2024 All rights reserved.</h3>
      <div className="trySeo">
        <a href="https://tryseoservices.com/">
          <img src={tss} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer2;

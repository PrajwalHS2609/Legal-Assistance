import React from "react";
import HomeFaqHead from "./HomeFaqHead";
import HomeFaqAcco from "./HomeFaqAcco";
import faqImg from "./../../../Images/faqImg.jpg"

const HomeFaqMain = () => {
  return (
    <div className="homeFaqMain">
      <div className="homeFaqMainContent" id="homeFaqMainImgContent">
        <img
          src={faqImg}
          alt="faqImg"
        />
      </div>
      <div className="homeFaqMainContent">
        <HomeFaqHead />
        <HomeFaqAcco />
      </div>
    </div>
  );
};

export default HomeFaqMain;

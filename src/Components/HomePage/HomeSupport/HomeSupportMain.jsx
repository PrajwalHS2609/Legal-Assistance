import React from "react";
import "./HomeSupport.css";
import HomeSupportDrop from "./HomeSupportDrop";
import SupportFooter from "./SupportFooter";
const HomeSupportMain = () => {
  return (
    <div className="homeSupportMainContainer">
      <HomeSupportDrop
        no="01"
        head="Commercial Litigation"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-7.jpg"
        dropHead="Strategic Information"
        dropPara=" Venenatis urna cursus eget nunc. Eu non diam phasellus vestibulum
            lorem sed risus. Morbi blandit cursus risus at."
      />
      <HomeSupportDrop
        no="02"
        head="Franchising & Licensing"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-5.jpg"
        dropHead="Business Relationship"
        dropPara="Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Suscipit  ultricies integer quis auctor."
      />
      <HomeSupportDrop
        no="03"
        head="Bankruptcy & Insolvency"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-8.jpg"
        dropHead="Professional Agencies"
        dropPara="Euismod nisi porta lorem mollis aliquam ut porttitor.  fringilla ut morbi tincidunt. Ac tortor vitae purus faucibus.   "
      />
      <HomeSupportDrop
        no="04"
        head="Dispute Resolution"
        img="https://bylaw.wpengine.com/wp-content/uploads/2023/10/practices-area-hover-image-3.jpg"
        dropHead="Settling Outside"
        dropPara="Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor. In  duis  tincidunt. "
      />
      <SupportFooter/>
    </div>
  );
};

export default HomeSupportMain;

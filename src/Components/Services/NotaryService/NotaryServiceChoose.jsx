import React from "react";
import icon from "./../../../Images/Law Service Icons/Civil_law.png";

const NotaryServiceChoose = () => {
  return (
    <div className="altDisputeWhy">
      <h2>Choosing the Right Notary Service </h2>{" "}
      <p>
        When choosing a notary service, it’s essential to consider several
        factors to ensure that you receive the best possible service. At MM
        Associates, our <a href="https://lawyersinbangalore.com/notary-services-in-bangalore">Notary Services in Bangalore</a> are characterized by:
      </p>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Professionalism::</span>{" "}
          <p>
             We maintain the highest standards of professionalism in all our
            dealings, ensuring that your documents are handled with care and
            precision.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Accessibility:</span>{" "}
          <p>
            Our notary services are easily accessible, with convenient locations
            and flexible scheduling options.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={icon} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Reliability :</span>{" "}
          <p>
            We are committed to providing reliable and accurate notarization
            services, ensuring that your documents are legally valid and
            recognized.
          </p>
        </div>
      </li>
    </div>
  );
};

export default NotaryServiceChoose;

import React from "react";
import hacker from "./../../../Images/Law Service Icons/hacker.png";

const CyberCrimeCommon = () => {
  return (
    <div className="altDisputeWhy">
      <h2>Common Types of Cyber Crimes </h2>{" "}
      <p>
        Cyber crime is a broad category, and different types of cyber crimes
        require specialized legal strategies. Here are some of the most common
        types of cyber crimes that cyber crime lawyers in Bangalore handle:
      </p>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Hacking :</span>{" "}
          <p>
            Unauthorized access to a computer system or network with the intent
            to steal, alter, or destroy data.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Identity Theft:</span>{" "}
          <p>
            Illegally obtaining and using someone’s personal information,
            typically for financial gain.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Phishing Scams:</span>{" "}
          <p>
            Fraudulent attempts to obtain sensitive information, such as
            usernames, passwords, and credit card details, by disguising as a
            trustworthy entity.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Cyberstalking:</span>{" "}
          <p>
            Using the internet or other digital means to stalk, harass, or
            intimidate someone.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Online Fraud:</span>{" "}
          <p>
            Deceptive practices conducted over the internet, including financial
            fraud, romance scams, and auction fraud.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Cyber Terrorism:</span>{" "}
          <p>
            The use of digital technologies to create fear or panic through
            large-scale disruptions, often targeting government institutions or
            infrastructure.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Revenge Porn:</span>{" "}
          <p>
            The unauthorized distribution of sexually explicit images or videos
            of an individual without their consent.
          </p>
        </div>
      </li>
      <li>
        <div className="altDisputeWhyIcon">
          {" "}
          <img src={hacker} alt="" />
        </div>
        <div className="altDisputeList">
          <span>Defamation:</span>{" "}
          <p>
            Spreading false information about an individual or organization
            online, which can lead to serious reputational damage.
          </p>
        </div>
      </li>
    </div>
  );
};

export default CyberCrimeCommon;

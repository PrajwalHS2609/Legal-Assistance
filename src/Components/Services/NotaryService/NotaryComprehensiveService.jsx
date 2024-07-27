import React from "react";
import "./NotaryService.css";
import lawHammer from "./../../../Images/Law Service Icons/Commercial_law.png";

const NotaryComprehensiveService = () => {
  return (
    <div className="notaryService">
      <h2>Comprehensive Notary Services at MM Associates</h2>{" "}
      <p>
        At MM Associates, we understand the importance of having reliable notary
        services. Our Notary Services in Bangalore cover a wide range of needs,
        including:
      </p>
        <li>
          <img src={lawHammer} alt="" />
          <span> Affidavits and Declarations: </span>{" "}
          <p>
            ADR methods are generally less expensive than traditional court
            proceedings. By avoiding the lengthy and costly process of
            litigation, parties can save on legal fees and other expenses.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Property Documents:</span>{" "}
          <p>
            Our services include the notarization of property-related documents
            such as sale deeds, lease agreements, and mortgage papers.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Power of Attorney:</span>{" "}
          <p>
            We notarize power of attorney documents, granting legal authority to
            individuals to act on behalf of others in legal or financial
            matters.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Business Agreements:</span>{" "}
          <p>
            We handle the notarization of various business documents, including
            partnership agreements, contracts, and corporate resolutions.
          </p>
        </li>
        <li>
          <img src={lawHammer} alt="" /> <span>Wills and Trusts:</span>{" "}
          <p>
            Our notaries ensure that wills, trusts, and other estate planning
            documents are properly executed and legally binding.
          </p>
        </li>
    </div>
  );
};

export default NotaryComprehensiveService;

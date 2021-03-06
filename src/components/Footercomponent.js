import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center foot-down">
          <div className="col-12 col-sm-6 text-center contact-font">
            <h4 className="bot-copy">Contact</h4>
            <p className="bot-copy text-center">
              <i className="fa fa-phone fa-lg"></i>: (714) 639-9162
              <br />
              <i className="fa fa-envelope fa-lg"></i>: Joe.kim@truteceng.com
            </p>
            {/* <ul className="list-unstyled d-flex flex-column align-item-left">
              <li className="bot-copy text-center">
                <i className="fa fa-phone fa-lg"></i>: (714) 639-9162
              </li>
              <li className="bot-copy">
                <i className="fa fa-envelope fa-lg"></i>: Joe.kim@truteceng.com
              </li>
            </ul> */}
          </div>
          <div className="col-12 col-sm-6 text-center">
            <h4 className="bot-copy">Address</h4>
            <address className="bot-copy">
              555 W Lambert Rd Suite B<br />
              Brea, CA 92821
              <br />
            </address>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 text-center bot-copy">
            <p className="bot-copy">
              Copyright © 2021 TRUTEC ENGINEERING INC - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

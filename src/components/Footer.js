import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 id="git">
              Follow us  <FaGithub size="2em" />
            </h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/Akhilvgl"
                  className="badge badge-secondary  mr-4"
                  target="_blank"
                  id="listItems1"
                >
                  Akhil Venugopal
                </a>
                
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" id="right">
            &copy;{new Date().getFullYear()} All rights reserved 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

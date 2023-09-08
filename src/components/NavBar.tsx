import React from "react";
import companyLogo from "../assets/company-logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <a className="navbar-brand" href="#">
                <img src={companyLogo} alt="Bootstrap" width="30" height="24" />
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#">
                Navbar
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import React from "react";
// import logo from "D:/0 Final Project/frontend-banking/src/assets/img/logo.png";
import logo from "../../../src/assets/img/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

const NavigationSide = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Dashboard
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/payment" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="wallet" className="mr-3" />
            Payment
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/history" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="history" className="mr-3" />
            History
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/cards">
          <MDBListGroupItem style={{ color: "#b7b7b7" }} disabled>
            <MDBIcon far icon="credit-card" className="mr-3" />
            Cards
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/credits">
          <MDBListGroupItem style={{ color: "#b7b7b7" }} disabled>
            <MDBIcon icon="chart-line" className="mr-3" />
            Credits
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/deposits">
          <MDBListGroupItem style={{ color: "#b7b7b7" }} disabled>
            <MDBIcon icon="landmark" className="mr-3" />
            Deposits
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/settings" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="user-cog" className="mr-3" />
            Settings
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default NavigationSide;

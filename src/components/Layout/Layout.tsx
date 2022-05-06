import React from "react";
import { FlexContainer } from "../../styles";
import { Logo, PageBox } from "../../components";
import { Link, useHistory } from "react-router-dom";
import "./Layout.scss";
import { notification, logout, plus } from "../../images";
const Cookies = require("js-cookie");

//import {useHistory} from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function Layout(props: any) {
  const { children } = props;

  const history = useHistory();
  const logOut = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div className=" container dashboard-container">
      <div className="dashboard-content">
        <div className="nav-section">
          <FlexContainer className="nav-container">
            <Logo />
            <div className="menu-option">
              <div className="icon-div">
                <img
                  style={{ cursor: "pointer" }}
                  src={notification}
                  alt="notification"
                />
              </div>
              <div className="icon-div">
                <img
                  style={{ cursor: "pointer" }}
                  src={logout}
                  alt="logout"
                  onClick={logOut}
                />
              </div>
            </div>
          </FlexContainer>
        </div>
        <div className="dashboard-info">
          <div className="dashboard-info-container">
            <FlexContainer className=" box box-1">
              <PageBox />
              {/* <CountryList classList="country-list" /> */}
            </FlexContainer>
            <div className="box  box-2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

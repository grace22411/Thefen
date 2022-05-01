import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../../images";
import "./pagebox.scss";
export const PageBox = () => {
  const user: any = localStorage.getItem("user");
  const getUser = JSON.parse(user);

  return (
    <>
      {user && (
        <div className="profile-box">
          <div className="profile-box-section">
            <div className="profile-box-section-1">
              <div className="">
                <img src={profile} alt="profile icon" />
              </div>
              <div className="profile-text">
                <h3 style={{ color: "#fff" }}>{getUser.result.name}</h3>
                <p>Edit Profile</p>
              </div>
            </div>
            <div className="profile-box-section-2">
              {/* <div className="warning-text">
                <p>
                  Hello {getUser.result.name}, please add your house address to
                  enable us ship your orders to you.
                </p>
              </div> */}
              <div className="profileDetails">
                <div className="detail pointer flex-space-btw">
                  <p>Change Password</p>
                  <div className="centered">
                    <img
                      className="icon"
                      src="/assets/icons/lockIconBlue.svg"
                      alt="change password"
                    ></img>
                  </div>
                </div>
                <div className="detail pointer flex-space-btw">
                  <p>Payment Validation</p>
                  <div className="centered">
                    <img
                      className="icon"
                      src="/assets/icons/checkIconBlue.svg"
                      alt="address"
                    ></img>
                  </div>
                </div>
                <div className="detail pointer flex-space-btw">
                  <p>Shipping Address</p>
                  <div className="centered">
                    <img
                      className="icon"
                      src="/assets/icons/addressIconBlue.svg"
                      alt="address"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="cta-to-add">
                <Link to="/address">Add Shipping Address</Link>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

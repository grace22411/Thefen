import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputBox, Spinner } from "../../components";
import Cookie from "js-cookie";
import { setAuthToken } from "../../services/authServices";

import {
  Colors,
  CustomButton,
  FlexContainer,
  Header3,
  ParagraphText,
} from "../../styles";
import { Home } from "../Home/Home";
import "./login.scss";
import { loginCall } from "./LoginService";

//import * as jwt from "jsonwebtoken"

export const Login = (props: any) => {
  const [formData, updateValues] = useState<any>({ email: "", password: "" });
  const [spinner, changeSpinner] = useState(false);
  const [errorText, updateErrorText] = useState("");
  const history = useHistory();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    updateValues({ ...formData, [name]: value });
  };

  const validate = () => {
    changeSpinner(true);
    formData.email = formData.email.trim();
    formData.password = formData.password.trim();

    if (
      formData.email === "" ||
      formData.email === null ||
      formData.password === "" ||
      formData.password === null
    ) {
      changeSpinner(false);
      updateErrorText("Email or password cannot be empty");
    } else {
      loginMethod();
    }
  };

  const loginMethod = async () => {
    updateErrorText("");
    changeSpinner(true);
    // console.group(formData);
    try {
      const result = await loginCall(formData);
      changeSpinner(false);
      if (result.status === 200) {
        toast("Welcome on board");
        const token = result.data.data.token;
        localStorage.setItem("user", JSON.stringify(result.data.data));
        Cookie.set("token", token, { expires: 1 });
        setAuthToken(token);
        history.push("/dashboard");
      }
    } catch (e) {
      changeSpinner(false);
      updateErrorText("User does not exist");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="login-home-container">
          <Home />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <FlexContainer className="login-content" flexDirection="column">
              <div className="login-content-header login-content-div">
                <Header3
                  fontSize="2.3rem"
                  textAlign="center"
                  weight="700"
                  className="login-welcome-title"
                  color={Colors.blueColor}
                >
                  Hi, Welcome back!{" "}
                </Header3>
                <ParagraphText
                  className="login_p_text"
                  fontColor={Colors.lighterGrey}
                >
                  we are so glad to have you back again, please sign in with
                  your details below.
                </ParagraphText>
              </div>
              <div className="login-form-display login-content-form login-content-div">
                <InputBox
                  handleChange={handleInputChange}
                  inputName="email"
                  labelText="Email"
                  inputType="text"
                />
                <InputBox
                  handleChange={handleInputChange}
                  inputName="password"
                  labelText="Password"
                  inputType="password"
                />
                <div className="remember-me">
                  {/* <input type='checkbox' className="input-box"/> <label htmlFor="">Remember me</label> */}
                  <Link to="/forgotpassword">
                    {" "}
                    <p>Forgot Password? </p>
                  </Link>
                </div>
              </div>
              <div className="login-content-button login-content-div">
                <CustomButton
                  onClick={() => validate()}
                  bgColor={Colors.blueColor}
                >
                  Login
                  <Spinner start={spinner} />
                </CustomButton>
                <ParagraphText textAlign="center" fontColor={Colors.redColor}>
                  {errorText}
                </ParagraphText>
              </div>
              <div className="create-account">
                <Link to="/register">
                  {" "}
                  <p>
                    Don't have an account?{" "}
                    <span className="create-text">Create one</span>
                  </p>
                </Link>
              </div>
            </FlexContainer>
          </div>
        </div>
      </div>
    </>
  );
};

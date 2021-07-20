import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CustomButton,
  FlexContainer,
  Header3,
  ParagraphText,
} from "../../styles";
import { InputBox, Spinner } from "../../components";
import { flyover } from "../../images";
import { Colors } from "../../styles/colors";
import { registerCall } from "./RegisterService";
import "../Login/login.scss";
import "./register.scss";

export const Register = (props: any) => {
  const [formData, updateValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  const [spinner, changeSpinner] = useState(false);
  const [errorText, updateErrorText] = useState("");

  const {name, email, password, phoneNumber} = formData;
  //onchange
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    updateValues({ ...formData, [name]: value });
    console.log(formData);
  };
  const signUpMethod = async () => {
    updateErrorText('')
    //console.group(formData);
    changeSpinner(() => true);
    const { history } = props;
    if (password.length < 8) {
      return updateErrorText(
        "Password should be minimum of 8 characters"
      );
    }
    try {
      const result = await registerCall(formData);
      if (result.status === 200) {
        console.log(result.data);
        return props.history.push('/dashboard');
      }
      changeSpinner(false);
    } catch (e) {
      console.log(e);
      changeSpinner(false);
    }
  };
  return (
    <div className="container register-container">
      <div className="register-container-content">
        <div className="register-section-container">
          <div className=" register-section intro-text register-section-1">
            <div>
              <img alt="Move your items" src={flyover} />
            </div>
            <div className="register-section-1-text">
              <Header3
                textAlign="center"
                fontSize="1.6rem"
                className="intro-text-header"
              >
                Welcome to NorthSnow{" "}
              </Header3>
              <ParagraphText className="intro-text-p">
                Start shopping and shipping from overseas by creating your
                account.
              </ParagraphText>
            </div>
          </div>
          <div className=" register-section form-section register-section-2">
            <FlexContainer className="" flexDirection="column">
              <div className="login-content-header login-content-div">
                <Header3
                  textAlign="center"
                  fontSize="2.3rem"
                  className="login-welcome-title"
                  color={Colors.blueColor}
                >
                  Hi, Welcome back!{" "}
                </Header3>
              </div>
              <div className="login-form-display login-content-form login-content-div register-form-display">
                <InputBox
                  inputName="name"
                  handleChange={handleInputChange}
                  labelText="Full Name"
                  inputType="text"
                />
                <InputBox
                  inputName="email"
                  handleChange={handleInputChange}
                  labelText="Email"
                  inputType="text"
                />
                <InputBox
                  inputName="phoneNumber"
                  handleChange={handleInputChange}
                  labelText="Phone Number"
                  inputType="text"
                />
                <InputBox
                  inputName="password"
                  handleChange={handleInputChange}
                  labelText="Password"
                  inputType="password"
                />
                <InputBox
                  inputName="passwordConfirm"
                  handleChange={handleInputChange}
                  labelText="Confirm Password"
                  inputType="password"
                />
                <div className="register-remember-me">
                  <input type="checkbox" />
                  <label>
                    By clicking the “Sign up” button, you agree to Northsnow’s{" "}
                    <Link to="/">Terms & Conditions.</Link>
                  </label>
                </div>
              </div>
              <div className="login-content-button login-content-div register-content-button">
                <CustomButton onClick={signUpMethod} bgColor={Colors.blueColor}>
                  Sign up <Spinner start={spinner} />
                </CustomButton>
                <ParagraphText textAlign='center' fontColor={Colors.redColor}>{errorText}</ParagraphText>
              </div>
              <div className="create-account">
                <p>
                  Already have an account?{" "}
                  <span className="create-text">Login</span>
                </p>
              </div>
            </FlexContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

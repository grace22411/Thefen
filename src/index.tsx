import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { notification, Spin } from "antd";
import "./index.scss";
import {
  Home,
  Login,
  ForgotPassword,
  NewPassword,
  Register,
  Dashboard,
  VerifyEmail,
  PaymentValidation,
} from "./pages";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/Private/PrivateRoute";
import Address from "./pages/Address/Address";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import { handleBasicAuth } from "./services/authServices";
import history from "./utils/history";

const Routings = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/newpassword" component={NewPassword} />
      <Route path="/verifyEmail" component={VerifyEmail} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/address" component={Address} />
      <PrivateRoute path="/changepassword" component={ChangePassword} />
      <PrivateRoute path="/paymentvalidation" component={PaymentValidation} />
    </Switch>
  </Router>
);

const App = () => {
  const [loadingApplication, setLoadingApplication] = useState(true);

  useEffect(() => {
    handleBasicAuth(
      {
        cancelLoading: () => setLoadingApplication(false),
      },
      {
        showMessage: (message: string) =>
          notification.warn({
            message: "Oops!",
            description: message,
          }),
      }
    );
  }, []);
  return !loadingApplication ? (
    <Routings />
  ) : (
    <div style={{ height: "100vh" }} className="centered">
      <Spin style={{ margin: "auto" }} />
    </div>
  );
};

const rootElement: any = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(routing, rootElement);
// } else {
//   ReactDOM.render(routing, rootElement);
// }
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

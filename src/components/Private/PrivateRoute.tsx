import React, { useEffect, useState } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { handleRouteAuthStatus } from "../../services/authServices";
import { notification } from "antd";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { component: Component, ...rest } = props;

  useEffect(() => {
    handleRouteAuthStatus(
      { cancelLoading: () => setIsLoading(false) },
      {
        showMessage: (message: string) =>
          notification.warn({
            message: "Oops!",
            description: message,
          }),
      }
    );
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !isLoading && <Component {...routeProps} {...rest} />
      }
    />
  );
};

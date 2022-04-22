import { notification } from "antd";

export const errorNotification = (
  error: any,
  errorMessage?: { message: string; description: string }
) => {
  notification.error(
    errorMessage || {
      message: "Error",
      description: `${
        error?.message ||
        error.response?.message ||
        "An error occurred while processing"
      }`,
    }
  );
};

export const successNotification = (description: string) => {
  notification.success({
    message: "Success",
    description: description,
  });
};

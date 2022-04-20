import { forgotpassword } from "../../services";
import axios from "axios";

export const ForgotPasswordCall = (params: any) =>
  axios.post(forgotpassword, params);

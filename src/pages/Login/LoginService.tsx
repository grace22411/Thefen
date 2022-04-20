import { login } from "../../services";
import axios from "axios";

export const loginCall = (params: any) => axios.post(login, params);

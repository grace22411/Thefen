import { addstore, initiateRequest, getCategory } from "../../services";
import axios from "axios";

export const itemCall = (params: any) => axios.post(addstore, params);
export const makeRequest = (params: any) => axios.post(initiateRequest, params);
export const categoryList = () => axios.get(getCategory);

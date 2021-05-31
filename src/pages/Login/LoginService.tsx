import {login,header} from '../../services';
import axios,{AxiosResponse,AxiosRequestConfig} from 'axios';


 export const loginCall = (params:any) => axios.post(login,params,header);
import {login} from '../../services';
import axios,{AxiosResponse,AxiosRequestConfig} from 'axios';

const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

 export const loginCall = (params:any) => axios.post(login,params,header);
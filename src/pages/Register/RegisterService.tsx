import {register,header} from '../../services';

import axios from 'axios';


export const registerCall = (params:any)=>axios.post(register,params,header);
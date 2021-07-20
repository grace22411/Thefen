import http, { register } from '../../services';

export const registerCall = (params:any)=> http.post(register, params);
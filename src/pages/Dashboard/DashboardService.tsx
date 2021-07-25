import http, { addstore } from '../../services';

export const itemCall = (params:any)=> http.post(addstore, params);
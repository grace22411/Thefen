import http, { addstore,initiateRequest,getCategory } from '../../services';

const storageVal:any = localStorage.getItem('user');
const apiToken = JSON.parse(storageVal).token;
const auth = {
    headers: {
        'Authorization': `Bearer ${apiToken}`
      }
}

export const itemCall = (params:any)=> http.post(addstore, params);
export const makeRequest = (params:any)=> http.post(initiateRequest, params,auth);
export const  categoryList  = () =>http.get(getCategory, auth)
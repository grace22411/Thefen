import http, {login} from '../../services';


 export const loginCall = (params:any) => http.post(login, params);
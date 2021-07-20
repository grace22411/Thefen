import http, {forgotpassword} from '../../services';


 export const ForgotPasswordCall = (params:any) => http.post(forgotpassword, params);
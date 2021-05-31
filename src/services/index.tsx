const baseUrl = `https://fierce-crag-66560.herokuapp.com/api/v1`;
    export const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    export const register = `${baseUrl}/auth/signup`;
    export const login = `${baseUrl}/auth/login`;
    export const forgotpassword = `${baseUrl}/auth/forgotpassword`;
    export const resetpassword = `${baseUrl}/auth/resetpassword`;
    export const updatepassword = `${baseUrl}/auth/changepassword`;
    
    //add store
   export const  addstore =  `${baseUrl}/store`;
   export const getAllStore =`${baseUrl}/store`


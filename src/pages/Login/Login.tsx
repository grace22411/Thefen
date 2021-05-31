import React,{useState} from 'react';
import { Home } from '../Home/Home';
import  {InputBox} from '../../components';
import {Colors} from '../../styles';
import {CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import './login.scss';
import {loginCall} from './LoginService'


export const Login = (props:any) =>{
    const [formData,updateValues] = useState({email:'',password:''});

    const handleInputChange = (e:any) => {
        const {name, value} = e.target
        updateValues({...formData, [name]: value})
        console.log(formData)
    }

    const loginMethod = async(e:any) =>{
        e.preventDefault();
        const {history} = props;
        try{
            const result = await loginCall(formData);
            console.log(result);
        }catch(e){
            console.log(e.response.data);
        }
    }

    return (
        <div className='login-container'>
            <div className='login-home-container'>
                 <Home/> 
            </div>
            <div className='login-form-container'>
                <div className='login-form'>
                   <FlexContainer className='login-content' flexDirection='column' >
                       <div className='login-content-header login-content-div'>
                           <Header3 fontSize='2.3rem' textAlign="center" className='login-welcome-title' color={Colors.blueColor} >Hi, Welcome back! </Header3>
                           <ParagraphText className='login_p_text' fontColor={Colors.lighterGrey}>we are so glad to have you back again, please sign in with your details below.</ParagraphText>
                       </div>
                       <div className='login-form-display login-content-form login-content-div'>
                            <InputBox handleChange={handleInputChange} inputName='email' labelText='Email' inputType='text'/>
                            <InputBox handleChange={handleInputChange}  inputName='password' labelText='Password' inputType='password'/>
                            <div className='remember-me'>
                            </div>
                       </div>
                       <div className='login-content-button login-content-div'>
                            <CustomButton bgColor={Colors.blueColor}>Login</CustomButton>
                       </div>
                       <div className='create-account'>
                           <p>Don't have an account? <span className='create-text'>Create one</span></p>
                       </div>
                   </FlexContainer>

                </div>
            </div>
        </div>
    )
}

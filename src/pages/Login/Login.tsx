import React from 'react';
import { Home } from '../Home/Home';
import  {InputBox} from '../../components';
import {Colors} from '../../styles';
import {CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import './login.scss';

export const Login = () =>{

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
                            <InputBox labelText='Email' inputType='text'/>
                            <InputBox labelText='Password' inputType='password'/>
                            <div className='remember-me'>
                                <InputBox inputType='checkbox' labelText='Remember me'/>
                                <p>Forgot password?</p>
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

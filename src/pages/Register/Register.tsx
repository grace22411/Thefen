import React from 'react';
import {CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import  {InputBox} from '../../components';
import {flyover} from '../../images'
import {Colors} from '../../styles';
import '../Login/login.scss';
import './register.scss';


export const Register = () => {
    return (
        <div className='container register-container'>
            <div className='register-container-content'>
                <div className='register-section-container'>
                    <div className=' register-section intro-text register-section-1'>
                        <div>
                            <img alt='Move your items' src={flyover}/>
                        </div>
                        <div className='register-section-1-text' >
                            <Header3 fontSize="1.6rem" className='intro-text-header'>Welcome to NorthSnow </Header3>
                            <ParagraphText className='intro-text-p'>Start shopping and shipping from overseas by creating your account.</ParagraphText>
                        </div>
                    </div>
                    <div className=' register-section form-section register-section-2'>
                        <FlexContainer className='' flexDirection='column' >
                            <div className='login-content-header login-content-div'>
                                <Header3 textAlign='center' fontSize='2.3rem' className='login-welcome-title' color={Colors.blueColor} >Hi, Welcome back! </Header3>
                            </div>
                            <div className='login-form-display login-content-form login-content-div register-form-display'>
                                    <InputBox labelText='Full Name' inputType='text'/>
                                    <InputBox labelText='Email' inputType='text'/>
                                    <InputBox labelText='Phone Number' inputType='password'/>
                                    <InputBox labelText='Password' inputType='password'/>
                                    <div className='register-remember-me'>
                                       <input type="checkbox"/>
                                        <label>By clicking the “Sign up” button, you agree to Northsnow’s <a>Terms & Conditions.</a></label>
                                    </div>
                            </div>
                            <div className='login-content-button login-content-div register-content-button'>
                                <CustomButton bgColor={Colors.blueColor}>Sign up</CustomButton>
                            </div>
                            <div className='create-account'>
                                <p>Already have an account? <span className='create-text'>Login</span></p>
                            </div>
                         </FlexContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}





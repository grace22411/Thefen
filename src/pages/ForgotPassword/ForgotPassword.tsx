import React from 'react';
import { Home } from '../Home/Home';
import  {InputBox} from '../../components';
import {CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import '../Login/login.scss';
import {Colors} from '../../styles';


export const ForgotPassword = () => {
    return (
        <div className='login-container'>
            <div className='login-home-container'>
                <Home/> 
            </div>
             <div className='login-form-container'>
                <div className='login-form'>
                <FlexContainer className='login-content' flexDirection='column' >
                    <div className='login-content-header login-content-div'>
                        <Header3 fontSize='2.3rem' className='login-welcome-title' color={Colors.blueColor} >Forgot Password </Header3>
                        <ParagraphText className='login_p_text' fontColor={Colors.lighterGrey}>Please enter your login email address and we will send a recovery link to your email.</ParagraphText>
                    </div>
                    <div className='login-form-display login-content-form login-content-div'>
                            <InputBox labelText='Email' inputType='text'/>
                            
                        
                    </div>
                    <div className='login-content-button login-content-div'>
                            <CustomButton bgColor={Colors.blueColor}>Continue</CustomButton>
                    </div>

                </FlexContainer>

                </div>
            </div>
        </div>
    )
}



import React from 'react';
import {Link} from "react-router-dom"
import { Home } from '../Home/Home';
import { CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import '../Login/login.scss';
import {Colors} from '../../styles';


export const VerifyEmail = () => {

    return (
        <div className='login-container'>
            <div className='login-home-container'>
                <Home/> 
            </div>
             <div className='login-form-container'>
                <div className='login-form'>
                <FlexContainer className='login-content' flexDirection='column' >
                    <div className='login-content-header login-content-div'>
                        <Header3 textAlign='center' fontSize='2.3rem' className='login-welcome-title' color={Colors.blueColor} >Verify Your Email </Header3>
                        <ParagraphText className='login_p_text' fontColor={Colors.lighterGrey}>Please check your for email verification link.</ParagraphText>
                    </div>
                    <Link to='/login'><CustomButton  bgColor={Colors.blueColor}>
                  Go to Login 
                </CustomButton></Link>
                    

                </FlexContainer>

                </div>
            </div>
        </div>
    )
}



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
                        <Header3 textAlign='center' fontSize='2.3rem' weight="700" className='login-welcome-title' color={Colors.blueColor} >Verify Your Email Address</Header3>
                        <ParagraphText className='login_p_text' fontColor={Colors.lighterGrey}>you’ve entered example@gmail.com as the email address for your account. Please verify this email address by clicking the button below.</ParagraphText>
                    </div>
                    <Link to='/login' style={{textAlign:"center"}}><CustomButton   bgColor={Colors.blueColor}>
                  Go to Login 
                </CustomButton></Link>
                    

                </FlexContainer>

                </div>
            </div>
        </div>
    )
}



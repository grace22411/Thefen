import React,{useState} from 'react';
import { Home } from '../Home/Home';
import  {InputBox,Spinner} from '../../components';
import {CustomButton,FlexContainer, Header3, ParagraphText} from '../../styles';
import '../Login/login.scss';
import {Colors} from '../../styles';
import {ForgotPasswordCall} from './ForgotService'


export const ForgotPassword = (dispatch:any) => {
    const [formData,updateValues] = useState<any>({email:''});
    const [spinner,changeSpinner] = useState(false);
    // const [errorText,updateErrorText]  = useState('');

    const handleInputChange = (e:any) => {
        const {name, value} = e.target
        updateValues({...formData, [name]: value})
    }

    const validate = () =>{
        changeSpinner(()=>true);
        formData.email = formData.email.trim();
        
           if(formData.email === '' || formData.email === null ){
                changeSpinner(()=>false);
                return updateErrorText('Email cannot be empty');
            }
            else{ return forgotPasswordMethod()};
            
    }
     //const dispatch = useDispatch()

    const forgotPasswordMethod = async() => {
        updateErrorText('')
        changeSpinner(()=>true);
        console.group(formData);

       try{
            const result =  await ForgotPasswordCall(formData);
            changeSpinner(false);
            if(result.status === 200){
                dispatch(result.data.message);
            }

        } catch(e){
            changeSpinner(false);
            //return updateErrorText('User does not exist');
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
                        <Header3 textAlign='center' fontSize='2.3rem' className='login-welcome-title' color={Colors.blueColor} weight="700" >Forgot Password </Header3>
                        <ParagraphText className='login_p_text' fontColor={Colors.lighterGrey}>Please enter your login email address and we will send a recovery link to your email.</ParagraphText>
                    </div>
                    <div className='login-form-display login-content-form login-content-div'>
                            <InputBox handleChange={handleInputChange} inputName='email' labelText='Email' inputType='email' />
                            
                        
                    </div>
                    <div className='login-content-button login-content-div'>
                            <CustomButton bgColor={Colors.blueColor} onClick={validate}>Continue <Spinner start={spinner}/></CustomButton>
                    </div>

                </FlexContainer>

                </div>
            </div>
        </div>
    )
}



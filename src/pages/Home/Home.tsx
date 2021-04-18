import React from 'react';
import {Navbar} from '../../components';
import {CustomButton,FlexContainer, Header3, ParagraphText,Image} from '../../styles';
import {Colors} from '../../styles';
import {pattern,brandimage} from '../../images';
import './home.scss';

export const Home = () => 
<div>
    <Navbar/>
    <FlexContainer background={Colors.blueColor}  className='large-wrapper'>
        <div className='align-div'>
           <div className='flex-div'>
                <div className='header-text'>
                    <Header3>We Shop for you,</Header3>
                    <Header3>and Deliver to you,</Header3>
                    <div className='header-image-container'>
                        <Image  width="40%" position='absolute' src={pattern}/>
                    </div>
                </div>
                <div className='subtitle-text'>
                    <ParagraphText>With Northsnow, you can get assisted Shopping services </ParagraphText>
                    <ParagraphText>from your favourite stores abroad, and have us deliver it to </ParagraphText> 
                    <ParagraphText>you seamlessly.</ParagraphText>
                 </div>
           </div>
            
           
            <div className='button-container'>
                <CustomButton width='140' className='font-noto'  bgColor={Colors.redColor}>
                    Get Started
                </CustomButton>
            </div>
           
        </div>
        <div className='align-div'>
            <div className='image-container'>
                <Image width="110%" src={brandimage}/>
            </div>
        </div>
    </FlexContainer>
</div>
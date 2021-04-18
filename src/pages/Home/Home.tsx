import React from 'react';
import {Navbar,List} from '../../components';
import {CustomButton,FlexContainer, Header3, ParagraphText,Image} from '../../styles';
import {Colors} from '../../styles';
import {pattern,brandimage,groupimg} from '../../images';
import './home.scss';

export const Home = () => 
<div>
    <Navbar/>
    <FlexContainer background={Colors.blueColor}  className='large-wrapper'>
        <div className='align-div'>
           <div className='flex-div'>
                <div className='header-text'>
                    <Header3 fontSize="4.8rem">We Shop for you,</Header3>
                    <Header3 fontSize='4.8rem'>and Deliver to you,</Header3>
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

    <div className='how-we-work' style={{background:Colors.tealColor2}} >
        <Header3 className='how-we-work-header-text' color={Colors.darkColor}>How it Works <hr/></Header3>
        <FlexContainer className='flex-width'>
           <div className='image-container'>
               <Image width="55%" src={groupimg}/>
           </div>
           <div style={{padding:'5px'}}>
              <List headerText="Shop from your favorite store"
              bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.'/>
              <List headerText='Copy & Paste  URL'
               bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.'/>
              <List headerText='Make payments & Track shipment'
               bodyText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.'/> 
           </div>
        </FlexContainer>
    </div>
</div>
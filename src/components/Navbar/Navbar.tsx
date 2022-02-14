import React from 'react';
import {FlexContainer} from '../../styles';
import {Logo} from '../index';
import {Link} from 'react-router-dom';
import {CustomButton} from '../../styles/index';
import {Colors} from '../../styles'
import './navbar.scss';

export default function Navbar() {
    return (
       <FlexContainer className='width-reduce' flexDirection='row' justify='space-between'>
           <Logo/>
           <FlexContainer className='nav-button-container'>
               <div className='nav-bar'>
               <i className="far fa-bars"></i>
               </div>
              <div className='btn-container'>
                  <Link to="/login"><CustomButton borderRadius="100px" bgColor={Colors.blueColor}>Log in</CustomButton></Link>
               </div>
               <div className='btn-container'>
                  <Link to="/register"><CustomButton borderRadius="100px" fontColor={Colors.blueColor} >Sign up</CustomButton></Link>
               </div>
           </FlexContainer>
       </FlexContainer>
    )
}

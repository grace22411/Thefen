
import React,{FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {logo} from '../../images'

type LogoProps = {
    image?: string
}

export const Logo:FunctionComponent<LogoProps> = ({image}) => 
    <div className='logo-flex'>
        <a href="/">
            <img src={logo} alt=""/>
        </a>
       <Link to='/' className='brand-name'> Northsnow</Link> 
    </div>

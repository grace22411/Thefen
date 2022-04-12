
import React,{FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo-blue.svg'

type LogoProps = {
    image?: string
}

export const Logo:FunctionComponent<LogoProps> = () => 
    <div className='logo-flex'>
        <a href="/">
            <img src={logo} alt=""/>
        </a>
       {/* <Link to='/' className='brand-name'> Northsnow</Link>  */}
    </div>

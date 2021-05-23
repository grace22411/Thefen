import React from 'react'
import {profile} from '../../images';
import './pagebox.scss';

export const PageBox = () => {
    return (
        <div className='profile-box'>
            <div className='profile-box-section'> 
                <div className='profile-box-section-1'>
                    <div className=''><img src={profile} alt='profile icon'/></div>
                    <div className='profile-text'>
                        <h3>Tunde Bakare</h3>
                        <p>Edit Profile</p>
                    </div>
                </div>
                <div className='profile-box-section-2'>
                    <div className='warning-text'>
                        <p>Hello Tunde, please add your house address to enable us ship your orders to you.</p>
                    </div>
                    <div className='cta-to-add'>
                        <a href='/'>Add Shipping Address</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


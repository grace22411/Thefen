import React from 'react'


type PasswordProp = {
  index: number,
  handleChange:(e:any)=>void,
}

export const ChangePasswordForm = ({handleChange,index}:PasswordProp) => {
    
    return (
        <div className='url-form-section'>
            <div className='input-group'>
                <div className='input-group-div'>
                    <label>Change Password  </label>
                    <div className='input-box'><input data-index={index} onChange={handleChange} name='shoppingUrl' /></div>
                </div>
                <div className=' input-group-div'>
                    <label>New Password </label>
                    <div className='input-box'><input data-index={index} name='value' onChange={handleChange} /></div>
                </div>
                <div className=' input-group-div'>
                    <label>Confirm New Password </label>
                    <div className='input-box'><input data-index={index} name='value' onChange={handleChange} /></div>
                </div>
                
            </div>
            

        </div>
            
    )
}

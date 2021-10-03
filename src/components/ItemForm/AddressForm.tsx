import React from 'react'


type AddressProp = {
  index: number,
  handleChange:(e:any)=>void,
}

export const AddressForm = ({handleChange,index}:AddressProp) => {
    
    return (
        <div className='url-form-section'>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-2'>
                    <label>Full Name </label>
                    <div className='input-box'><input data-index={index} onChange={handleChange} name='shoppingUrl' /></div>
                </div>
                <div className=' input-group-div flex-2'>
                    <label>Phone Number </label>
                    <div className='input-box'><input data-index={index} name='value' onChange={handleChange} /></div>
                </div>
                
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-1'>
                    <label>House Address (Please provide a detailed address, as this will be the standard final destination) <span>*</span> </label>
                    <div className='input-box'><input onChange={handleChange} data-index={index}  name='color'/></div>
                </div>
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-1'>
                    <label>State </label>
                    <div className='input-box'>
                        <select onChange={handleChange} name='category' data-index={index}>
                            <option value="" selected disabled hidden>Choose here</option>
                            
                        </select>
                    </div>
                </div>

                
                <div className='input-group-div flex-1'>
                    <label>City</label>
                    <div className='input-box'><input onChange={handleChange} data-index={index}  name='color'/></div>
                </div>
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-2'>
                    <label>Estimated Weight</label>
                    <div className='input-box'><input onChange={handleChange} data-index={index}  name='color'/></div>
                </div>
            </div>

        </div>
            
    )
}

import React from 'react'


type PaymentProp = {
  index: number,
  handleChange:(e:any)=>void
}

export const PaymentForm = ({handleChange,index}:PaymentProp) => {
    
    return (
        <div className='url-form-section'>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-1'>
                    <label>Shipment ID </label>
                    <div className='input-box'><input data-index={index} onChange={handleChange} name='shipmentId' /></div>
                </div>
                <div className=' input-group-div flex-2'>
                    <label>Sender's Name </label>
                    <div className='input-box'><input data-index={index} name='senderName' onChange={handleChange} /></div>
                </div>
                <div className=' input-group-div flex-1'>
                    <label>Sender's Bank </label>
                    <div className='input-box'><input data-index={index} name='value' onChange={handleChange} /></div>
                </div>
                
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-2'>
                    <label>Amount(#) </label>
                    <div className='input-box'><input data-index={index} type="number" onChange={handleChange} name='Amount' /></div>
                </div>
                <div className=' input-group-div flex-2'>
                    <label>Ref Code </label>
                    <div className='input-box'><input data-index={index} name='refCode' type="text" onChange={handleChange} /></div>
                </div>
                
            </div>
            
            

        </div>
            
    )
}

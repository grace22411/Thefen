import React from 'react'
import { Colors, CustomButton, Header3, ParagraphText } from '../../styles';


type ItemProp = {
  index: number
  data:any,
  itemLength:number,
  handleChange:(e:any)=>void,
  removeIndex:(e:any)=>void
}

export const ItemForm = ({removeIndex,index,itemLength,data,handleChange}:ItemProp) => {
    return (
        <div className='url-form-section'>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-3'>
                    <label>Shopping URL <span>*</span> </label>
                    <div className='input-box'><input onChange={handleChange} name={data?.url} /></div>
                </div>
                <div className=' input-group-div flex-1'>
                    <label>Price <span>*</span> </label>
                    <div className='input-box'><input/></div>
                </div>
            </div>
            <div className='additional-info'>
                <Header3 fontSize='1.1rem' color={Colors.blueColor}>Additional Info</Header3>
                <ParagraphText weight='100' fontSize='1.09rem' fontColor={Colors.lighterGrey}>In order for us to deliver the exact items, we would need you to feel some info where applicable</ParagraphText>
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-1'>
                    <label>Category <span>*</span> </label>
                    <div className='input-box'><select></select></div>
                </div>
                <div className='input-group-div flex-1'>
                    <label>Quantity <span>*</span> </label>
                    <div className='input-box'><select></select></div>
                </div>
                <div className='input-group-div flex-1'>
                    <label>Size <span>*</span> </label>
                    <div className='input-box'><input/></div>
                </div>
                <div className='input-group-div flex-1'>
                    <label>Color <span>*</span> </label>
                    <div className='input-box'><input/></div>
                </div>
            </div>
            <div className='input-group input-group-flex'>
                <div className ='input-group-div flex-1'>
                    <span>Should in case our predefined info area doesnt meet your product description, please give a clear description of the item.</span>
                    <div className='input-box'><textarea rows="5"></textarea></div>
                </div>
            </div>

            { itemLength > 1 && 
            <div className='input-group input-group-flex'>
                <div className ='input-group-div flex-1'>
                   <CustomButton onClick={()=>removeIndex(index)} borderRadius='4px' fontColor={Colors.blueColor} width='120' className='remove-btn'>Remove URL</CustomButton>
                </div>
            </div> }
        </div>
    )
}

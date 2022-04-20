import React from 'react'
import { Colors, CustomButton, Header3, ParagraphText } from '../../styles';
import "./itemform.scss"


type ItemProp = {
  clothId:string,
  shoeId:string,
  index: number,
  item?:any,
  itemLength:number,
  categories?:any,
  handleChange:(e:any)=>void,
  removeIndex:(i:any)=>void
}

export const ItemForm = ({removeIndex,handleChange,itemLength,index,categories}:ItemProp) => {
    
    const range100 = Array.from(Array(100).keys());

    //range of values
    const valueRange = (start:any, end:any): any => {
        if(start === end) return [start];
        return [start, ...valueRange(start + 1, end)];
    }

    
    // const shoeId = getObj("Shoes")[0]._id;
    // const clothId= getObj("Clothings")[0]._id;

    // console.log(shoeId,'and',clothId);

    

    return (
        <div className='url-form-section'>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-3'>
                    <label>Shopping URL <span>*</span> </label>
                    <div className='input-box'><input data-index={index} onChange={handleChange} name='shoppingUrl' /></div>
                </div>
                <div className=' input-group-div flex-1'>
                    <label>Price <span>*</span> </label>
                    <div className='input-box price'><input data-index={index} name='value' type="number" onChange={handleChange} /><p>$</p></div>
                </div>
            </div>
            <div className='additional-info'>
                <Header3 fontSize='1.1rem' color={Colors.blueColor}>Additional Info</Header3>
                <ParagraphText weight='100' fontSize='1.09rem' fontColor={Colors.lighterGrey}>In order for us to deliver the exact items, we would need you to feel some info where applicable</ParagraphText>
            </div>
            <div className='input-group input-group-flex'>
                <div className='input-group-div flex-1'>
                    <label>Category <span>*</span> </label>
                    <div className='input-box'>
                        <select onChange={handleChange} name='category' data-index={index}>
                            <option value="" selected disabled hidden>Choose here</option>
                            {categories && categories.map((item:any)=>
                               
                                <option value={item?._id}>{item?.name} </option>
                             )}
                        </select>
                    </div>
                </div>

                <div className='input-group-div flex-1'>
                    <label>Quantity <span>*</span> </label>
                    <div className='input-box'>
                        <select onChange={handleChange} name='quantity' data-index={index}>
                        <option value="" selected disabled>Choose here</option>
                            {
                                range100 && range100.map((i,index)=>
                                    <option value={i}> {i}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                
                {/* {item && item.category === shoeId &&
                    <div className='input-group-div flex-1'>
                        <label>Size <span>*</span> </label>
                        <div className='input-box'>
                            <select onChange={handleChange} name='size' data-index={index}>
                                { valueRange(30,45).map((i:any,index:any)=>
                                    <option value={i}>{i}</option>
                                ) }
                            </select>
                        </div>
                    </div>
                } */}
                    <div className='input-group-div flex-1'>
                        <label>Size <span>*</span> </label>
                        <div className='input-box'>
                            <select onChange={handleChange} name='size' data-index={index}>
                                <option value='small'>small</option>
                                <option value='medium'>medium</option>
                                <option value='large'>large</option>
                                <option value='xl'>xl</option>
                                <option value='xxl'>xxl</option>
                            </select>
                        </div>
                    </div>
                
                <div className='input-group-div flex-1'>
                    <label>Color <span>*</span> </label>
                    <div className='input-box'><input onChange={handleChange} data-index={index}  name='color'/></div>
                </div>
            </div>
            <div className='input-group input-group-flex'>
                <div className ='input-group-div flex-1'>
                    <span>Should in case our predefined info area doesn't meet your product description, please give a clear description of the item.</span>
                    <div className='input-box'><textarea data-index={index} name='description' ></textarea></div>
                </div>
            </div>

            {itemLength >= 1 && 

            <div className='input-group input-group-flex'>
                <div className ='input-group-div flex-1'>
                   <CustomButton borderRadius='4px' onClick={()=>removeIndex(index)} fontColor={Colors.blueColor} width='120' className='remove-btn'>Remove URL</CustomButton>
                </div>
            </div> 
            }
        </div>
            
    )
}

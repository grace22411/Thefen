import React,{useState} from 'react'
import { Colors, CustomButton, FlexContainer, Header3 } from '../../styles';
import {Logo,PageBox,ItemForm,CountryList} from '../../components';
import './dashboard.scss';
import {notification,logout,plus} from '../../images'


export const Dashboard  = () => {
    const itemInfo = {
        url:'',
        price:'',
        category:'',
        quantity:'',
        size:'',
        color:''
    }
    const [formLength,updateLength] = useState([0]);
    const [form,updateForm] = useState([itemInfo]);
    

    const updateItemForm = () =>{
        updateLength(formLength => [...formLength, formLength.length + 1])
    }
    
    const removeIndex = (i) =>{
        const item  = formLength.indexOf(i);
          formLength.splice(item,1);
         updateLength(()=>[...formLength]);
    }

    const updateChange = (e:any)=>{
     
    }
    return (
        <div className=' container dashboard-container'> 
            <div className='dashboard-content'>
                <div className='nav-section'>
                    <FlexContainer className='nav-container'>
                        <Logo/>
                        <div className='menu-option'>
                            <div className='icon-div'>
                                <img src={notification} alt='notification'/>
                            </div>
                            <div className='icon-div'>
                                <img src={logout} alt='logout '/>
                            </div>
                        </div>
                    </FlexContainer>
                </div>
               <div className='dashboard-info'>
                    <div className='dashboard-info-container'>
                        <FlexContainer className=' box box-1'>
                            <PageBox/>
                            <CountryList classList='country-list'/>
                        </FlexContainer>
                        <div className='box  box-2'>
                            <div className='url'>
                                <div className="url-header">
                                    <Header3 color={Colors.blueColor}>URL</Header3>
                                </div>
                                <div className='url-form'>
                                    {formLength  && formLength.map((i,index)=> <ItemForm removeIndex={removeIndex} index={i}  itemLength ={formLength.length} data={form} handleChange ={updateChange} />)}
                                    
                                    <div className='add-button-container'>
                                        <CustomButton bgColor={Colors.blueColor} borderRadius='10px'>Send</CustomButton>
                                        <CustomButton  bgColor={Colors.whiteColor} width='120' borderRadius='10px' fontColor={Colors.blueColor} onClick={()=>updateItemForm()} className='add-more'><img src={plus} alt='plus-con'/>Add URL</CustomButton>
                                    </div>
                                </div>
                            </div>
                            <div className='shipping-info'></div>
                        </div>
                    </div>
               </div>
            </div>  
        </div>
    )
}



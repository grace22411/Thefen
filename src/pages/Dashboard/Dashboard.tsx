import React,{useState} from 'react'
import { Colors, CustomButton, FlexContainer, Header3 } from '../../styles';
import {Logo,PageBox,ItemForm,CountryList} from '../../components';
import './dashboard.scss';
import {notification,logout,plus} from '../../images'
//import {useHistory} from "react-router-dom";
//import { useDispatch } from "react-redux";


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
    const [itemList,updateItemList] = useState([itemInfo]);
    

    const addItems = () =>{
        const formCopy = itemList; 
        formCopy.push(itemInfo);
        updateItemList(()=>[...formCopy])
    }

    const updateItemForm = () =>{
        updateLength(formLength => [...formLength, formLength.length + 1])
    }
    
    const removeIndex = (i:any) =>{
        const item  = formLength.indexOf(i);
          formLength.splice(item,1);
         updateLength(()=>[...formLength]);
    }

    const updateChange = (e:any)=>{
     
    }

//     const history = useHistory();
//   const dispatch = useDispatch()
//   const logOut = () => {
//     history.push('/');
//     dispatch(logoutService());
//   };

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
                                    {itemList  && itemList.map((i,index)=> <ItemForm removeIndex={removeIndex} index={index}  itemLength ={itemList.length} data={itemList} handleChange ={updateChange} />)}
                                    
                                    <div className='add-button-container'>
                                        <CustomButton bgColor={Colors.blueColor} borderRadius='10px'>Send</CustomButton>
                                        <CustomButton  bgColor={Colors.whiteColor} width='120' borderRadius='10px' fontColor={Colors.blueColor} onClick={()=>addItems()} className='add-more'><img src={plus} alt='plus-con'/>Add URL</CustomButton>
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



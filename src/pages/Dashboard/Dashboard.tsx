import React,{useState,useEffect} from 'react'
import { Colors, CustomButton, FlexContainer, Header3 } from '../../styles';
import {Logo,PageBox,ItemForm,CountryList} from '../../components';
import {categoryList} from './DashboardService'
import './dashboard.scss';

import {notification,logout,plus} from '../../images';
import {makeRequest} from './DashboardService'
//import {useHistory} from "react-router-dom";
//import { useDispatch } from "react-redux";


export default function Dashboard (){

    const itemInfo = {
            shoppingUrl:'',
            value:'',
            category:'',
            quantity:'',
            size:'',
            color:''
        }
    
    //const [formLength,updateLength] = useState([0]);
    const [categoriesList,updateCategoryList] = useState<{_id:string,createdAt:string,updatedAt:string,__v?:string}[]>([])
    const [itemList,updateItemList] = useState([itemInfo]);

    useEffect(() => {
        
        // declare the async data fetching function
        const fetchData = async () => {
          const list = await categoryList();
          console.log(list.data.data.result)
            updateCategoryList(list.data.data.result);        
        }
      
        fetchData()
          .catch(console.error);
      }, [])

    const addItems = () =>{
        const formCopy = itemList; 
        formCopy.push(itemInfo);
        updateItemList(()=>[...formCopy])
    }

    const getObj = (name:any) => categoriesList.filter((val:any)=>val.name === name);
     const shoeId = getObj("Shoes")[0]?._id;
     const clothId= getObj("Clothings")[0]?._id;
     console.log(shoeId,clothId)
    const userInfo:any  =  localStorage.getItem('user');
    const userData = JSON.parse(userInfo)

    const request ={
        requestItems:[
            ...itemList
        ],
        addressDetails:{
            fullName: userData?.result?.name,
            phoneNumber:  userData?.result?.phoneNumber,
            address: "Gbagada",
            city: "6105fe35673bcc0015e506e1",
            state: "6105fe33673bcc0015e50432"
        },
        weight : 1
    }


    const removeIndex = (i:any) =>{
        let data = [...itemList];
        data.splice(i,1);
        updateItemList(data);
    }

    const updateChange = (e:any)=>{
       let newList = [...itemList];
       newList[e.target.dataset.index] = {...newList[e.target.dataset.index], [e.target.name]: e.target.value};
        updateItemList(()=>[...newList]);
        console.log(newList)
    }

    const initiateRequest =  async()=>{
        console.log(request)
        try{
            const result =  await makeRequest(request);
            console.log(result.data)
        }
        catch(e){
            console.log(e);
        }
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
                                    {itemList  && itemList.map((i,index)=> <ItemForm categories={categoriesList} itemLength={itemList.length-1} item={itemList[index]}  removeIndex={removeIndex} index={index} clothId = {clothId} shoeId={shoeId}  handleChange ={updateChange} />)}
                                    
                                    <div className='add-button-container'>
                                        <CustomButton onClick={initiateRequest} bgColor={Colors.blueColor} borderRadius='10px'>Send</CustomButton>
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



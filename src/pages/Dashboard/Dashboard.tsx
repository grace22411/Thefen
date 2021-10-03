import React, { useState, useEffect } from "react";
import { Colors, CustomButton, FlexContainer, Header3 } from "../../styles";
import { Logo, PageBox, ItemForm, CountryList, InputBox } from "../../components";
import { categoryList } from "./DashboardService";
import "./dashboard.scss";

import { notification, logout, plus } from "../../images";
import { makeRequest } from "./DashboardService";
import Layout from "../../components/Layout/Layout";
import ShoppingInfo from "./ShoppingInfo";
import CheckEmail from "../../components/Modals/Modal";
//import {useHistory} from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("url");
  const [ShippingList, setShippingList] = useState([]);
  const [filteredShipping, setFilteredShipping] = useState([]);

  const itemInfo = {
    shoppingUrl: "",
    value:0,
    category: "",
    quantity: "",
    size: "",
    color: "",
  };

  //const [formLength,updateLength] = useState([0]);
  const [categoriesList, updateCategoryList] = useState<
    { _id: string; createdAt: string; updatedAt: string; __v?: string }[]
  >([]);
  const [itemList, updateItemList] = useState([itemInfo]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const list = await categoryList();
      //console.log('hello there',list.data.data.result.name);
      updateCategoryList(list.data.data.result);
    };

    fetchData().catch(console.error);
  }, []);

  const addItems = () => {
    const formCopy = itemList;
    formCopy.push(itemInfo);
    updateItemList(() => [...formCopy]);
  };

  const getObj = (name: any) => 
    categoriesList.filter((val: any) => val.name === name);
  const shoeId = getObj("Shoes")[0]?._id;
  const clothId = getObj("Clothings")[0]?._id;
  console.log(shoeId, clothId);
  const userInfo: any = localStorage.getItem("user");
  const userData = JSON.parse(userInfo);
  console.log(categoriesList)


  const request = {
    requestItems: [...itemList],
    addressDetails: {
      fullName: userData?.result?.name,
      phoneNumber: '08166656784',
      address: "Gbagada",
      city: "6105fe35673bcc0015e506e1",
      state: "6105fe33673bcc0015e50432",
    },
    weight: 1,
  };

  const removeIndex = (i: any) => {
    let data = [...itemList];
    data.splice(i, 1);
    updateItemList(data);
  };

  const updateChange = (e: any) => {
    let newList = [...itemList];
    const {value,name,dataset}= e.target
    newList[dataset.index] = {
      ...newList[dataset.index],
      [name]: name === 'value' || name === 'quantity' ? parseInt(value) : value,
    };
    updateItemList(() => [...newList]);
    //console.log(newList);
  };

  const initiateRequest = async () => {
    console.log(request);
    try {
      const result = await makeRequest(request);
        
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const proceedToAddress = () => {
    setCurrentView("address");
  };
  
//   const inputChange = (val:any) => {
//     const filteredData = ShippingList.filter((entry) => {
//       const queries = val.toLowerCase();
//       return (
//         entry.store.toLowerCase().includes(queries) ||
//         entry.waybillNumber.toLowerCase().includes(queries) ||
//         entry.id.toLowerCase().includes(queries)
//       );
//     });
//     setFilteredShipping(filteredData);
//   };
  return (
    <Layout>
          <div className="url">
            <div className="url-header">
              <Header3 color={Colors.blueColor}>URL</Header3>
            </div>
            <div className="url-form">
              {itemList &&
                itemList.map((i, index) => (
                  <ItemForm
                    categories={categoriesList}
                    itemLength={itemList.length - 1}
                    item={itemList[index]}
                    removeIndex={removeIndex}
                    index={index}
                    clothId={clothId}
                    shoeId={shoeId}
                    handleChange={updateChange}
                  />
                ))}

              <div className="add-button-container">
                <CustomButton
                  onClick={initiateRequest} 
                  bgColor={Colors.blueColor}
                  borderRadius="10px"
                >
                  Send
                </CustomButton>
                <CheckEmail />
                <CustomButton
                  bgColor={Colors.whiteColor}
                  width="120"
                  borderRadius="10px"
                  fontColor={Colors.blueColor}
                  onClick={() => addItems()}
                  className="add-more"
                >
                  <img src={plus} alt="plus-con" />
                  Add URL
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="shipping-info">
            <div className="url-header">
              <Header3 color={Colors.blueColor}>Shipping Info</Header3>
            </div>
            <input type="text" placeholder="Search" />
            <ShoppingInfo />
          </div>
        
    </Layout>
  );
}

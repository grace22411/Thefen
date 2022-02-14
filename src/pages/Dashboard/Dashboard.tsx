import React, { useState, useEffect } from "react";
import { Colors, CustomButton, Header3 } from "../../styles";
import { ItemForm, Spinner } from "../../components";
import { categoryList } from "./DashboardService";
import "./dashboard.scss";

import { plus } from "../../images";
import { makeRequest } from "./DashboardService";
import Layout from "../../components/Layout/Layout";
import ShoppingInfo from "./ShoppingInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckEmail from "../../components/Modals/Modal";
import { Modal } from "antd";
import "../../components/Modals/Modal.scss";
import mail from "../../images/checkmail.png";
//import {useHistory} from "react-router-dom";
//import { useDispatch } from "react-redux";

export default function Dashboard(props: any) {
  const [ShippingList, setShippingList] = useState([]);
  const [filteredShipping, setFilteredShipping] = useState([]);
  const [spinner, changeSpinner] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const itemInfo = {
    shoppingUrl: "",
    value: 0,
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
  const userInfo: any = localStorage.getItem("user");
  const userData = JSON.parse(userInfo);

  const request = {
    requestItems: [...itemList],
    addressDetails: {
      fullName: userData?.result?.name,
      phoneNumber: "08166656784",
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
    const { value, name, dataset } = e.target;
    newList[dataset.index] = {
      ...newList[dataset.index],
      [name]: name === "value" || name === "quantity" ? parseInt(value) : value,
    };
    updateItemList(() => [...newList]);
    //console.log(newList);
  };

  const initiateRequest = async () => {
    changeSpinner(() => true);
    try {
      changeSpinner(true);
      const result = await makeRequest(request);
      console.log(result.data);
      if (result.status === 201) {
        toast(result.data.message);
        setIsModalVisible(true);
      } else{

      }
      // if(result.status === 400){
      //   toast(result.data.message);
      // }

      changeSpinner(false);
    } catch (e) {
      changeSpinner(false);
      console.log(e);
    }
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
              Send <Spinner start={spinner} />
            </CustomButton>

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
      <ToastContainer />
      <Modal visible={isModalVisible} onCancel={handleCancel}>
        <img src={mail} alt="" />
        <h3>Check Your Mail</h3>
        <p>
          Your shipment ID and payment process has been sent to your registered
          email address. Please provide us with a proof of payment in the
          <b> payment validation</b> section to enable us process your order.
          Thank you for choosing Northsnow.
        </p>
      </Modal>
    </Layout>
  );
}

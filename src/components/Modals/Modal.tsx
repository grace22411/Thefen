import React, { useState } from "react";
import { Modal } from "antd";
import "./Modal.scss";
import mail from "../../images/checkmail.png";

const CheckEmail = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
     
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} showModal={showModal}>
        <img src={mail} alt="" />
        <h3>Check Your Mail</h3>
        <p>
          Your shipment ID and payment process has been sent to your registered
          email address. Please provide us with a proof of payment in the 
           <b>payment validation</b> section to enable us process your order. Thank you
          for choosing Northsnow.
        </p>
      </Modal>
    </>
  );
};

export default CheckEmail;

import React from "react";
import { ItemForm } from "../../components";
import { AddressForm } from "../../components/ItemForm/AddressForm";
import Layout from "../../components/Layout/Layout";
import { Colors, CustomButton, Header3 } from "../../styles";

const Address = () => {
  return (
    <Layout>
      <div className="url">
        <div className="url-header">
          <Header3 color={Colors.textColor}>Address</Header3>
        </div>
        <div className="url-form">
          <AddressForm />

          <div className="add-button-container">
            <CustomButton borderRadius="10px" bgColor={Colors.blueColor}>Send</CustomButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Address;

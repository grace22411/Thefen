import React from "react";

import { PaymentForm } from "../../components/ItemForm/PaymentForm";
import Layout from "../../components/Layout/Layout";
import { Colors, CustomButton, Header3 } from "../../styles";

export default function PaymentValidation() {
  return (
    <Layout>
      <div className="url">
        <div className="url-header">
          <Header3 color={Colors.textColor}>Payment Validation</Header3>
        </div>
        <div className="url-form">
          <PaymentForm  />

          <div className="add-button-container">
            <CustomButton borderRadius="10px" bgColor={Colors.blueColor}>Send</CustomButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};


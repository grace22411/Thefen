import React from "react";
import { ChangePasswordForm } from "../../components/ItemForm/ChangePasswordForm";
import Layout from "../../components/Layout/Layout";
import { Colors, CustomButton, Header3 } from "../../styles";

const ChangePassword = () => {
  return (
    <div>
      <Layout>
        <div className="url">
          <div className="url-header">
            <Header3 color={Colors.textColor}>Change Password</Header3>
          </div>
          <div className="url-form">
            <ChangePasswordForm />

            <div className="add-button-container">
              <CustomButton borderRadius="10px" bgColor={Colors.blueColor}>
                Save
              </CustomButton>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ChangePassword;

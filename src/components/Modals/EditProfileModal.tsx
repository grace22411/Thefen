import React, { useState } from "react";
import { Modal } from "antd";
import "./Modal.scss";
import { Console } from "console";

export const EditProfileModal = ({
  showModal,
  isVisible,
}: {
  showModal: Function;
  isVisible: boolean;
}) => {
  console.log(isVisible + " : modal");
  return (
    <>
      <Modal
        className="editProfileModal"
        visible={isVisible}
        onOk={() => showModal(false)}
        onCancel={() => showModal(false)}
      ></Modal>
    </>
  );
};

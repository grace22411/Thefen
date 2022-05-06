import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import "./Modal.scss";
import { Console } from "console";

export const EditProfileModal = ({
  showModal,
  isVisible,
}: {
  showModal: Function;
  isVisible: boolean;
}) => {
  const [imLoading, setImLoading] = useState({ id: "" });
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={"234"} style={{ width: 90 }}>
        <Option value="234">NG</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Modal
        className="editProfileModal"
        visible={isVisible}
        onOk={() => showModal(false)}
        onCancel={() => showModal(false)}
        footer={null}
      >
        <Form
          className="antdForm"
          //   onFinish={(data) => onSubmitContactDetail(data)}
          onFinishFailed={() => null}
          autoComplete="off"
          size="large"
        >
          <div className="centered profileImage">
            <div className="blueCover">
              <img src="assets/profilePlaceholder.svg" alt="profile"></img>
            </div>
          </div>
          <p className="text-center modalTitle">Edit Profile</p>
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please, provide a name!" }]}
          >
            <label>Full Name</label>
            <Input className="inputStyle" placeholder="John Doe" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please, provide an email!",
                type: "email",
              },
            ]}
          >
            <label>Email address</label>
            <Input
              className="inputStyle"
              type="email"
              placeholder="johndoe@person.com"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please, provide a phone number!",
              },
            ]}
          >
            <label>Phone Number</label>
            <Input addonBefore={prefixSelector} className="inputStyle" />
          </Form.Item>
          <div className="flex-1">
            <Button
              className="submitBtn"
              size={"large"}
              type="primary"
              htmlType="submit"
              // icon={<PlusOutlined />}
              loading={imLoading?.id === "editingProfile"}
            >
              Done
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

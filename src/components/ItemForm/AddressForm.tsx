import { notification, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { AddAddress, getStates } from "../../services/api";
import { Colors, CustomButton } from "../../styles";

export const AddressForm = () => {
  const [imLoading, setImLoading] = useState({ id: "" });
  const [states, setStates] = useState<StateDTO[]>([]);
  const [address, setAddress] = useState<AddressDTO>({
    street: "",
    state: "",
    city: "",
    fullName: "",
    phoneNumber: "",
    weight: 0,
  });

  useEffect(() => {
    getStates(setStates);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Object.values(address).some((data) => !!data === false)
      ? notification.info({
          message: "Oops!",
          description: "Fields marked* are required",
        })
      : (() => {
          setImLoading({ id: "sendingAddress" });
          AddAddress(address, {
            stopLoader: () => setImLoading({ id: "" }),
          });
        })();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="url-form-section">
        <div className="input-group input-group-flex">
          <div className="input-group-div flex-2">
            <label>Full Name </label>
            <div className="input-box">
              <input
                value={address.fullName}
                onChange={(e) =>
                  setAddress({ ...address, [e.target.name]: e.target.value })
                }
                name="fullName"
              />
            </div>
          </div>
          <div className=" input-group-div flex-2">
            <label>Phone Number </label>
            <div className="input-box">
              <input
                value={address.phoneNumber}
                name="phoneNumber"
                onChange={(e) =>
                  setAddress({ ...address, [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="input-group input-group-flex">
          <div className="input-group-div flex-1">
            <label>
              House Address (Please provide a detailed address, as this will be
              the standard final destination) <span>*</span>{" "}
            </label>
            <div className="input-box">
              <input
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, [e.target.name]: e.target.value })
                }
                name="street"
              />
            </div>
          </div>
        </div>
        <div className="input-group input-group-flex">
          <div className="input-group-div flex-1">
            <label>State </label>
            <div className="input-box">
              <select
                onChange={
                  (e) =>
                    setAddress({ ...address, [e.target.name]: e.target.value })
                  //   console.log(e.target.name, e.target.value)
                }
                value={address.state}
                name="state"
              >
                <option>Please select</option>
                {states.map((state) => (
                  <option key={state._id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="input-group-div flex-1">
            <label>City</label>
            <div className="input-box">
              <input
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, [e.target.name]: e.target.value })
                }
                name="city"
              />
            </div>
          </div>
        </div>
        <div className="input-group input-group-flex">
          <div className="input-group-div flex-2">
            <label>Estimated Weight</label>
            <div className="input-box">
              <input
                type="number"
                value={address.weight}
                onChange={(e) =>
                  setAddress({ ...address, [e.target.name]: e.target.value })
                }
                name="weight"
              />
            </div>
          </div>
        </div>
        <div className="add-button-container">
          <CustomButton
            disabled={imLoading.id === "sendingAddress"}
            borderRadius="10px"
            bgColor={Colors.blueColor}
          >
            Send {imLoading.id === "sendingAddress" && <Spin />}
          </CustomButton>
        </div>
      </div>
    </form>
  );
};

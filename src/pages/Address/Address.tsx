import React, { useState } from "react";
import { ItemForm } from "../../components";
import { AddressForm } from "../../components/ItemForm/AddressForm";
import Layout from "../../components/Layout/Layout";
import { Colors, CustomButton, Header3 } from "../../styles";
import "./Address.scss";

const Address = () => {
  const [imVisible, setImVisible] = useState<{ id: string }>({ id: "" });
  const dummyAddresses = [
    {
      name: "Grace Omole",
      address:
        "6 Remi Olowude street, Second Roundabout lekki phase 1, beside ITF, via Polystar Electroniccs, Eti-osa, Lagos",
      default: true,
      phone: "08164185121",
    },
    {
      name: "Emmanuel Lucius",
      address:
        "6 Remi Olowude street, Second Roundabout lekki phase 1, beside ITF, via Polystar Electroniccs, Eti-osa, Lagos",
      default: false,
      phone: "08164185121",
    },
  ];

  const AddressItem = (address: any) => {
    return (
      <div className="addressItem">
        <div className="flex-space-btw heading">
          {address.default ? (
            <h4
              style={{ backgroundColor: Colors.blueColor }}
              className="defaultAddress"
            >
              Default Address
            </h4>
          ) : (
            <h4 style={{ color: Colors.blueColor }} className="pointer">
              Set as default
            </h4>
          )}
          <div className="flex addressActions">
            <p className="pointer">Edit</p>
            <p className="pointer">Delete</p>
          </div>
        </div>
        <div className="addressDetailContainer">
          <div className="detail flex">
            <div className="centered">
              <img
                className="icon"
                src="/assets/icons/userIcon.svg"
                alt="user"
              ></img>
            </div>
            <p>{address.name}</p>
          </div>
          <div className="detail flex">
            <div className="centered">
              <img
                className="icon"
                src="/assets/icons/addressIcon.svg"
                alt="address"
              ></img>
            </div>
            <p>{address.address}</p>
          </div>
          <div className="detail flex">
            <div className="centered">
              <img
                className="icon"
                src="/assets/icons/phoneIcon.svg"
                alt="phone"
              ></img>
            </div>
            <p>{address.phone}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="urlpageContainer url">
        <div className="url-header flex-space-btw">
          <Header3 color={Colors.textColor}>Address</Header3>
          <h3
            onClick={() => setImVisible({ id: "addNewAddress" })}
            className="pointer"
            style={{ color: Colors.blueColor }}
          >
            + Add New Address
          </h3>
        </div>
        <div className="url-form">
          <AddressForm
            visible={imVisible}
            setVisibility={() => setImVisible({ id: "" })}
          />
        </div>

        <div className="addressListContianer">
          {dummyAddresses.map(AddressItem)}
        </div>
      </div>
    </Layout>
  );
};

export default Address;

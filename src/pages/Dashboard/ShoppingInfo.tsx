import React, { useEffect, useState } from "react";
import { Table, Radio, Divider } from "antd";
import "antd/dist/antd.css";
import TrackShipping from "./TrackShipping";
import { getAllShippingInfo } from "../../services/api";

const columns = [
  {
    title: "Id",
    dataIndex: "id",

    render: (text: string) => <p>{text}</p>,
  },
  {
    title: "Store",
    dataIndex: "store",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "WaybillNumber",
    dataIndex: "waybillNumber",
  },
  {
    title: "Shipment Status",
    dataIndex: "status",
  },
  {
    title: "Total Paid",
    dataIndex: "paid",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text: string) => (
      <>
        {" "}
        <TrackShipping />
      </>
    ),
  },
];

interface DataType {
  key: React.Key;
  id: string;
  product: string;
  store: string;
  status: string;
  paid: number;
  waybillNumber: string;
  action: string;
}

const data: DataType[] = [
  {
    key: "1",
    id: "516DS",
    store: "Amazon",
    product: "iPhone 12 Pro  Max",
    waybillNumber: "WR11765329",
    status: "Pending",
    paid: 455.61,
    action: "Track",
  },
  {
    key: "1",
    id: "516DS",
    store: "Amazon",
    product: "Scooter",
    waybillNumber: "WR11765329",
    status: "Pending",
    paid: 455.61,
    action: "Track",
  },
  {
    key: "1",
    id: "516DS",
    store: "Amazon",
    product: "iPhone 12 Pro  Max",
    waybillNumber: "WR11765329",
    status: "Pending",
    paid: 455.61,
    action: "Track",
  },

  {
    key: "1",
    id: "516DS",
    store: "Amazon",
    product: "Scooter",
    waybillNumber: "WR11765329",
    status: "Pending",
    paid: 455.61,
    action: "Track",
  },
];

const ShoppingInfo = () => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  const [shippingInfos, setShippingInfos] = useState();
  const [imLoading, setImLoading] = useState<{ id: string }>({ id: "" });

  useEffect(() => {
    // getAllShippingInfo(setShippingInfos, {
    //   stopLoader: () => setImLoading({ id: "" }),
    // });
  }, []);

  // const data = [
  //   {
  //     shipping: {
  //       fullName: "Grace Omole",
  //       phoneNumber: "+08166656784",
  //       address: "Gbagada",
  //       city: "Ajeromi-Ifelodun",
  //       state: "Lagos State",
  //     },
  //     requestItems: [
  //       {
  //         shoppingUrl:
  //           "https://documenter.getpostman.com/view/12464626/UVyxQZ6A#5b535fbf-d38e-47dd-82b2-14d00073f116",
  //         value: 12,
  //         quantity: 12,
  //         size: "large",
  //         color: "silver",
  //         category: "Clothings",
  //       },
  //     ],
  //     paid: false,
  //     _id: "6261bf4100e517001656e583",
  //     _userId: "6243f998cfe71700167e78e4",
  //     requestNumber: "3239550",
  //     weight: 1,
  //     price: 1012,
  //     createdAt: "2022-04-21T20:32:01.450Z",
  //     updatedAt: "2022-04-21T20:32:01.450Z",
  //   },
  // ];

  return (
    <div>
      <Divider />
      <Table
        // loading={imLoading.id === "gettingShippingInfos"}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ShoppingInfo;

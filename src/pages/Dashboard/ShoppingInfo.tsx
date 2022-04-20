import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';
import 'antd/dist/antd.css'
import TrackShipping from './TrackShipping';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: 'Store',
    dataIndex: 'store',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'WaybillNumber',
    dataIndex: 'waybillNumber',
  },
  {
    title: 'Shipment Status',
    dataIndex: 'status',
  },
  {
    title: 'Total Paid',
    dataIndex: 'paid',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text: string) => <> <TrackShipping /></>,
  },
];

interface DataType {
  key: React.Key;
  id: string;
  product: string;
  store: string;
  status:string;
  paid:number;
  waybillNumber:string
  action:string
}

const data: DataType[] = [
  {
    key: '1',
    id: '516DS',
    store: 'Amazon',
    product: 'iPhone 12 Pro  Max',
    waybillNumber:"WR11765329",
    status: 'Pending',
    paid:455.61,
    action:"Track"

  },
  {
    key: '1',
    id: '516DS',
    store: 'Amazon',
    product: 'Scooter',
    waybillNumber:"WR11765329",
    status: 'Pending',
    paid:455.61,
    action:"Track"
  },
  {
    key: '1',
    id: '516DS',
    store: 'Amazon',
    product: 'iPhone 12 Pro  Max',
    waybillNumber:"WR11765329",
    status: 'Pending',
    paid:455.61,
    action:"Track"
  },

  {
    key: '1',
    id: '516DS',
    store: 'Amazon',
    product: 'Scooter',
    waybillNumber:"WR11765329",
    status: 'Pending',
    paid:455.61,
    action:"Track"
  },
];



const ShoppingInfo = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  return (
    <div>

      <Divider />

      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ShoppingInfo;


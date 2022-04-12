import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import "./dashboard.scss";

const TrackShipping: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <button onClick={showDrawer}>
        Track
      </button>
      <Drawer title="Shipment Progress"  width={347} placement="right" onClose={onClose} visible={visible}>
        <div className="progress">
            <h5>Store:</h5>
            <p>Amazon</p>
        </div>
        <div className="progress">
            <h5>Product:</h5>
            <p>iPhone 12 Pro  Max</p>
        </div>
        <div className="progress">
            <h5>Waybill Number:</h5>
            <p>WR11765329</p>
        </div>

        <p className="footer">Having issues? <span>Please call - +447495052289</span></p>
      </Drawer>
    </>
  );
};

export default TrackShipping;


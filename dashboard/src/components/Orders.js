import React from "react";
import { Link } from "react-router-dom";
import { ReceiptLongOutlined } from "@mui/icons-material";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <span className="empty-orders-icon"><ReceiptLongOutlined /></span>
        <span className="eyebrow">Order book</span>
        <h1>No orders to show</h1>
        <p>There are no orders in this preview. Explore your watchlist or review the sample portfolio.</p>
        <Link to={"/"} className="button-primary link-button">
          Explore dashboard
        </Link>
      </div>
    </div>
  );
};

export default Orders;

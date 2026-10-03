import React, { useState } from "react";
import { AccountBalanceOutlined, InfoOutlined } from "@mui/icons-material";
import { sampleFunds } from "../data/data";

const Funds = () => {
  const [transferNotice, setTransferNotice] = useState("");

  return (
    <div className="portfolio-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Account</span>
          <h1>Funds</h1>
          <p>Review your available balance and margin details.</p>
        </div>
        <div className="funds-toolbar">
          <p>UPI transfers are not connected in this preview.</p>
          <button
            className="button-primary"
            type="button"
            onClick={() => setTransferNotice("Fund transfers are not enabled in this dashboard preview. No transaction was created.")}
          >
            Add funds
          </button>
          <button
            className="button-secondary"
            type="button"
            onClick={() => setTransferNotice("Withdrawals are not enabled in this dashboard preview. No transaction was created.")}
          >
            Withdraw
          </button>
        </div>
      </div>

      {transferNotice && (
        <div className="notice-banner" role="status">
          <InfoOutlined aria-hidden="true" />
          <span>{transferNotice}</span>
          <button type="button" onClick={() => setTransferNotice("")} aria-label="Dismiss message">×</button>
        </div>
      )}

      <div className="funds-grid">
        <section className="funds-panel">
          <span className="eyebrow">Equity</span>
          <h2>Available balance</h2>
          <div className="funds-highlight">
            <span>Available margin</span>
            <strong>{`₹${sampleFunds.availableBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong>
            <small>Sample account value</small>
          </div>
          <div className="funds-row"><span>Opening balance</span><strong>{`₹${sampleFunds.openingBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong></div>
          <div className="funds-row"><span>Pay-in</span><strong>{`₹${sampleFunds.payIn.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong></div>
          <div className="funds-row"><span>Used margin</span><strong>{`₹${sampleFunds.usedMargin.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong></div>
          <div className="funds-row"><span>Delivery margin</span><strong>{`₹${sampleFunds.deliveryMargin.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong></div>
          <div className="funds-row"><span>Collateral</span><strong>{`₹${sampleFunds.collateral.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`}</strong></div>
          <p className="funds-note">Balances shown are sample values and are not connected to a live account.</p>
        </section>

        <section className="commodity-panel">
          <span className="app-card-icon"><AccountBalanceOutlined /></span>
          <span className="eyebrow">More ways to invest</span>
          <h2>Commodity account</h2>
          <p>Commodity trading isn’t connected in this preview. Account setup can be completed through your broker.</p>
        </section>
      </div>
    </div>
  );
};

export default Funds;

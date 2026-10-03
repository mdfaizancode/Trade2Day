import React from "react";
import { Link } from "react-router-dom";
import {
  AccountBalanceWalletOutlined,
  QueryStatsOutlined,
  ReceiptLongOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";

const tools = [
  {
    title: "Portfolio",
    description: "Review investment value, cost and performance.",
    path: "/holdings",
    label: "Open holdings",
    Icon: QueryStatsOutlined,
  },
  {
    title: "Positions",
    description: "See open positions and their current P&L.",
    path: "/positions",
    label: "View positions",
    Icon: ShowChartOutlined,
  },
  {
    title: "Funds",
    description: "Check the sample account balance and margins.",
    path: "/funds",
    label: "Review funds",
    Icon: AccountBalanceWalletOutlined,
  },
  {
    title: "Orders",
    description: "Check the order book for this dashboard preview.",
    path: "/orders",
    label: "Open order book",
    Icon: ReceiptLongOutlined,
  },
];

const Apps = () => (
  <div className="portfolio-page">
    <div className="page-heading">
      <div>
        <span className="eyebrow">Your workspace</span>
        <h1>Tools &amp; shortcuts</h1>
        <p>Jump straight to the information you need.</p>
      </div>
      <span className="sample-badge">4 tools</span>
    </div>
    <div className="apps-grid">
      {tools.map(({ title, description, path, label, Icon }) => (
        <article className="app-card" key={title}>
          <span className="app-card-icon"><Icon /></span>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link className="card-link" to={path}>{label} <span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  </div>
);

export default Apps;

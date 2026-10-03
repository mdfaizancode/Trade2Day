import React from "react";
import { Link } from "react-router-dom";
import {
  AccountBalanceWalletOutlined,
  ArrowForward,
  ShowChartOutlined,
  TrendingUp,
} from "@mui/icons-material";
import { holdings, sampleFunds } from "../data/data";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const Summary = () => {
  const investment = holdings.reduce((sum, stock) => sum + stock.avg * stock.qty, 0);
  const currentValue = holdings.reduce((sum, stock) => sum + stock.price * stock.qty, 0);
  const profitLoss = currentValue - investment;
  const returnPercent = investment ? (profitLoss / investment) * 100 : 0;

  return (
    <div className="overview-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Portfolio overview</span>
          <h1>Good to see you, {getFirstName()}.</h1>
          <p>Here’s a clear snapshot of your investments.</p>
        </div>
        <span className="sample-badge">Sample data</span>
      </div>

      <section className="overview-grid" aria-label="Portfolio summary">
        <article className="overview-card primary-card">
          <div className="card-label">
            <span>Total portfolio value</span>
            <span className="card-icon"><AccountBalanceWalletOutlined /></span>
          </div>
          <strong className="portfolio-total">{formatCurrency(currentValue)}</strong>
          <div className={`portfolio-change ${profitLoss >= 0 ? "profit" : "loss"}`}>
            <TrendingUp />
            <span>{formatCurrency(Math.abs(profitLoss))} ({returnPercent.toFixed(2)}%) overall return</span>
          </div>
          <span className="card-caption">Based on your sample holdings</span>
        </article>

        <article className="overview-card">
          <div className="card-label">
            <span>Invested amount</span>
            <span className="card-icon"><ShowChartOutlined /></span>
          </div>
          <strong>{formatCurrency(investment)}</strong>
          <span className="card-caption">Across {holdings.length} instruments</span>
          <Link className="card-link" to="/holdings">View holdings <ArrowForward /></Link>
        </article>

        <article className="overview-card">
          <div className="card-label">
            <span>Available funds</span>
            <span className="card-icon"><AccountBalanceWalletOutlined /></span>
          </div>
          <strong>{formatCurrency(sampleFunds.availableBalance)}</strong>
          <span className="card-caption">Available margin · sample value</span>
          <Link className="card-link" to="/funds">Manage funds <ArrowForward /></Link>
        </article>
      </section>

      <section className="holdings-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Your portfolio</span>
            <h2>Top holdings</h2>
          </div>
          <Link to="/holdings" className="text-link">See all holdings <ArrowForward /></Link>
        </div>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Quantity</th>
                <th>Avg. cost</th>
                <th>Last price</th>
                <th>Market value</th>
                <th>Day change</th>
              </tr>
            </thead>
            <tbody>
              {holdings.slice(0, 5).map((stock) => (
                <tr key={stock.name}>
                  <td><strong className="table-symbol">{stock.name}</strong></td>
                  <td>{stock.qty}</td>
                  <td>{formatCurrency(stock.avg)}</td>
                  <td>{formatCurrency(stock.price)}</td>
                  <td>{formatCurrency(stock.price * stock.qty)}</td>
                  <td className={stock.day.startsWith("-") ? "loss" : "profit"}>{stock.day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">Portfolio figures are sample values and may not reflect live market prices.</p>
      </section>
    </div>
  );
};

function getFirstName() {
  try {
    const user = JSON.parse(localStorage.getItem("user-info") || "{}");
    return user.name?.trim().split(/\s+/)[0] || "Investor";
  } catch (error) {
    console.error("Unable to read saved account information:", error);
    return "Investor";
  }
}

export default Summary;

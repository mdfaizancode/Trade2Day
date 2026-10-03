import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "https://trade2daybackend.onrender.com";
const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const loadPositions = useCallback(async (signal) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await axios.get(`${apiUrl}/allPositions`, { signal });
      if (!Array.isArray(response.data)) {
        throw new Error("The server returned an invalid positions response.");
      }
      setAllPositions(response.data);
      setStatus("success");
    } catch (error) {
      if (axios.isCancel(error) || error.code === "ERR_CANCELED") return;
      console.error("Unable to load positions:", error);
      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "We couldn't load your positions. Please try again."
      );
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadPositions(controller.signal);
    return () => controller.abort();
  }, [loadPositions]);

  return (
    <div className="portfolio-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Active trades</span>
          <h1>Positions</h1>
          <p>Keep an eye on your open market positions.</p>
        </div>
        <button className="button-secondary refresh-button" type="button" onClick={() => loadPositions()}>
          <span aria-hidden="true">↻</span> Refresh
        </button>
      </div>

      <section className="holdings-preview">
        <div className="section-heading">
          <div><span className="eyebrow">Your trades</span><h2>{allPositions.length} open positions</h2></div>
        </div>
        {status === "loading" && <div className="state-card" role="status">Loading your positions…</div>}
        {status === "error" && (
          <div className="state-card error-state" role="alert">
            <strong>Couldn’t load positions</strong>
            <span>{errorMessage}</span>
            <button className="button-primary" type="button" onClick={() => loadPositions()}>Try again</button>
          </div>
        )}
        {status === "success" && allPositions.length === 0 && (
          <div className="state-card">
            <strong>You’re all caught up</strong>
            <span>There are no open positions to show.</span>
          </div>
        )}
        {status === "success" && allPositions.length > 0 && (
          <div className="order-table">
            <table>
              <thead><tr><th>Product</th><th>Instrument</th><th>Qty.</th><th>Avg. cost</th><th>Last price</th><th>P&amp;L</th><th>Day change</th></tr></thead>
              <tbody>
                {allPositions.map((stock, index) => {
                  const qty = Number(stock.qty) || 0;
                  const avg = Number(stock.avg) || 0;
                  const price = Number(stock.price) || 0;
                  const pnl = (price - avg) * qty;
                  return (
                    <tr key={stock._id || stock.name || index}>
                      <td><span className="product-pill">{stock.product || "—"}</span></td>
                      <td><strong className="table-symbol">{stock.name || "—"}</strong></td>
                      <td>{qty}</td><td>{currency.format(avg)}</td><td>{currency.format(price)}</td>
                      <td className={pnl >= 0 ? "profit" : "loss"}>{currency.format(pnl)}</td>
                      <td className={String(stock.day || "").startsWith("-") ? "loss" : "profit"}>{stock.day || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default Positions;

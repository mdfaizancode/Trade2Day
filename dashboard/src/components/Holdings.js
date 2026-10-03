import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "https://trade2daybackend.onrender.com";
const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");

  const loadHoldings = useCallback(async (signal) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await axios.get(`${apiUrl}/allHoldings`, { signal });
      if (!Array.isArray(response.data)) {
        throw new Error("The server returned an invalid holdings response.");
      }
      setAllHoldings(response.data);
      setStatus("success");
    } catch (error) {
      if (axios.isCancel(error) || error.code === "ERR_CANCELED") return;
      console.error("Unable to load holdings:", error);
      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        "We couldn't load your holdings. Please try again."
      );
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadHoldings(controller.signal);
    return () => controller.abort();
  }, [loadHoldings]);

  const filteredHoldings = useMemo(
    () => allHoldings.filter((stock) =>
      String(stock.name || "").toLowerCase().includes(query.trim().toLowerCase())
    ),
    [allHoldings, query]
  );

  const totals = allHoldings.reduce((summary, stock) => {
    const qty = Number(stock.qty) || 0;
    const avg = Number(stock.avg) || 0;
    const price = Number(stock.price) || 0;
    summary.invested += avg * qty;
    summary.current += price * qty;
    return summary;
  }, { invested: 0, current: 0 });
  const profitLoss = totals.current - totals.invested;

  return (
    <div className="portfolio-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">Portfolio</span>
          <h1>Holdings</h1>
          <p>Track the investments you own and how they’re performing.</p>
        </div>
        <button className="button-secondary refresh-button" type="button" onClick={() => loadHoldings()}>
          <span aria-hidden="true">↻</span> Refresh
        </button>
      </div>

      {status === "success" && (
        <div className="portfolio-metrics">
          <div className="overview-card"><span>Invested value</span><strong>{currency.format(totals.invested)}</strong></div>
          <div className="overview-card"><span>Current value</span><strong>{currency.format(totals.current)}</strong></div>
          <div className="overview-card"><span>Overall P&amp;L</span><strong className={profitLoss >= 0 ? "profit" : "loss"}>{currency.format(profitLoss)}</strong></div>
        </div>
      )}

      <section className="holdings-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Your investments</span>
            <h2>{allHoldings.length} instruments</h2>
          </div>
          {status === "success" && (
            <label className="table-search">
              <span className="visually-hidden">Search holdings</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search holdings"
              />
            </label>
          )}
        </div>

        {status === "loading" && <div className="state-card" role="status">Loading your holdings…</div>}
        {status === "error" && (
          <div className="state-card error-state" role="alert">
            <strong>Couldn’t load holdings</strong>
            <span>{errorMessage}</span>
            <button className="button-primary" type="button" onClick={() => loadHoldings()}>Try again</button>
          </div>
        )}
        {status === "success" && allHoldings.length === 0 && (
          <div className="state-card">
            <strong>No holdings yet</strong>
            <span>When you invest, your holdings will appear here.</span>
          </div>
        )}
        {status === "success" && allHoldings.length > 0 && filteredHoldings.length === 0 && (
          <div className="state-card">No holdings match “{query}”.</div>
        )}
        {status === "success" && filteredHoldings.length > 0 && (
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th><th>Qty.</th><th>Avg. cost</th><th>Last price</th>
                  <th>Market value</th><th>P&amp;L</th><th>Net change</th><th>Day change</th>
                </tr>
              </thead>
              <tbody>
                {filteredHoldings.map((stock, index) => {
                  const qty = Number(stock.qty) || 0;
                  const avg = Number(stock.avg) || 0;
                  const price = Number(stock.price) || 0;
                  const pnl = (price - avg) * qty;
                  return (
                    <tr key={stock._id || stock.name || index}>
                      <td><strong className="table-symbol">{stock.name || "—"}</strong></td>
                      <td>{qty}</td>
                      <td>{currency.format(avg)}</td>
                      <td>{currency.format(price)}</td>
                      <td>{currency.format(price * qty)}</td>
                      <td className={pnl >= 0 ? "profit" : "loss"}>{currency.format(pnl)}</td>
                      <td className={pnl >= 0 ? "profit" : "loss"}>{stock.net || "—"}</td>
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

export default Holdings;

import React, { useMemo, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import {
  Close,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Search,
  ShowChart,
  SwapVert,
} from "@mui/icons-material";
import { watchList } from "../data/data";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

const WatchList = () => {
  const [query, setQuery] = useState("");
  const [sortGainersFirst, setSortGainersFirst] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const filteredStocks = useMemo(() => {
    const filtered = watchList.filter((stock) =>
      stock.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    if (sortGainersFirst) {
      return [...filtered].sort(
        (a, b) => parseFloat(b.percent) - parseFloat(a.percent)
      );
    }

    return filtered;
  }, [query, sortGainersFirst]);

  const visibleSelection = filteredStocks.find(
    (stock) => stock.name === selectedStock
  );

  return (
    <aside className="watchlist-container" aria-label="Market watchlist">
      <div className="watchlist-heading">
        <div>
          <span className="eyebrow">Your markets</span>
          <h2>Watchlist</h2>
        </div>
        <span className="watchlist-count">{filteredStocks.length} / {watchList.length}</span>
      </div>

      <div className="search-container">
        <Search className="search-icon" aria-hidden="true" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search symbols"
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search watchlist symbols"
        />
        {query && (
          <IconButton
            className="clear-search"
            size="small"
            onClick={() => setQuery("")}
            aria-label="Clear watchlist search"
          >
            <Close fontSize="small" />
          </IconButton>
        )}
        <Tooltip title={sortGainersFirst ? "Reset watchlist order" : "Sort by performance"}>
          <IconButton
            className={`sort-watchlist${sortGainersFirst ? " active" : ""}`}
            size="small"
            onClick={() => setSortGainersFirst((sorted) => !sorted)}
            aria-label={sortGainersFirst ? "Reset watchlist order" : "Sort by performance"}
            aria-pressed={sortGainersFirst}
          >
            <SwapVert fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      {visibleSelection && (
        <div className="selected-stock-card" aria-live="polite">
          <div>
            <span className="selected-stock-label">Selected instrument</span>
            <strong>{visibleSelection.name}</strong>
          </div>
          <div className="selected-stock-price">
            <strong>₹{formatPrice(visibleSelection.price)}</strong>
            <span className={visibleSelection.isDown ? "loss" : "profit"}>
              {visibleSelection.isDown ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
              {visibleSelection.percent}
            </span>
          </div>
        </div>
      )}

      <ul className="list">
        {filteredStocks.map((stock) => (
          <WatchListItem
            key={stock.name}
            stock={stock}
            isSelected={selectedStock === stock.name}
            onSelect={() =>
              setSelectedStock((current) => current === stock.name ? null : stock.name)
            }
          />
        ))}
        {filteredStocks.length === 0 && (
          <li className="watchlist-empty">
            <Search aria-hidden="true" />
            <strong>No symbols found</strong>
            <span>Try another company symbol.</span>
          </li>
        )}
      </ul>
      <p className="watchlist-footnote">Quotes shown are sample data for preview.</p>
    </aside>
  );
};

const WatchListItem = ({ stock, isSelected, onSelect }) => {
  const isDown = stock.isDown;

  return (
    <li className={`watchlist-item${isSelected ? " is-selected" : ""}`}>
      <button
        className="watchlist-stock"
        type="button"
        onClick={onSelect}
        aria-pressed={isSelected}
        aria-label={`View ${stock.name} sample quote`}
      >
        <span className="stock-symbol">{stock.name}</span>
        <span className="itemInfo">
          <span className={isDown ? "loss" : "profit"}>
            {isDown ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            {stock.percent}
          </span>
          <span className="stock-price">₹{formatPrice(stock.price)}</span>
        </span>
      </button>
      <Tooltip title={`Show ${stock.name} quote details`}>
        <IconButton
          className="stock-detail-button"
          size="small"
          onClick={onSelect}
          aria-label={`Show ${stock.name} quote details`}
        >
          <ShowChart fontSize="small" />
        </IconButton>
      </Tooltip>
    </li>
  );
};

export default WatchList;

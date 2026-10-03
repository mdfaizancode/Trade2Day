import React from "react";
import Menu from "./Menu";

const TopBar = ({ theme, setTheme }) => {
  const marketDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date());

  return (
    <header className="topbar-container">
      <div className="market-strip">
        <span className="market-indicator" aria-hidden="true"></span>
        <span>Workspace overview</span>
        <span className="market-separator"></span>
        <span className="market-data-note">Sample portfolio data</span>
        <span className="market-date">{marketDate}</span>
      </div>
      <Menu theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default TopBar;

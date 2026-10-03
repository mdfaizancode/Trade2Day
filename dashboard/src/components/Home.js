import React from "react";
import { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("trade2day-dashboard-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("trade2day-dashboard-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <TopBar theme={theme} setTheme={setTheme} />
      <Dashboard />
    </div>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AccountBalanceWalletOutlined,
  AppsOutlined,
  DashboardOutlined,
  ExpandMore,
  LightModeOutlined,
  NightsStayOutlined,
  ReceiptLongOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";

const navigation = [
  { label: "Overview", path: "/", Icon: DashboardOutlined },
  { label: "Orders", path: "/orders", Icon: ReceiptLongOutlined },
  { label: "Holdings", path: "/holdings", Icon: AccountBalanceWalletOutlined },
  { label: "Positions", path: "/positions", Icon: ShowChartOutlined },
  { label: "Funds", path: "/funds", Icon: AccountBalanceWalletOutlined },
  { label: "Apps", path: "/apps", Icon: AppsOutlined },
];

const Menu = ({ theme, setTheme }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem("user-info") || "{}");
  } catch (error) {
    console.error("Unable to read saved account information:", error);
  }

  const displayName = user.name || "Investor";
  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  useEffect(() => {
    if (!isProfileDropdownOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!profileRef.current?.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsProfileDropdownOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isProfileDropdownOpen]);

  return (
    <div className="menu-container">
      <a
         className="dashboard-brand"
         href="https://trade2dayfron-theta.vercel.app"
         aria-label="Trade2Day dashboard home"
       >
        <span className="brand-mark">T</span>
        <span>
        Trade<span className="brand-accent">2</span>Day
        </span>
     </a>

      <nav className="menus" aria-label="Dashboard navigation">
        {navigation.map(({ label, path, Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              className={`menu-link${isActive ? " selected" : ""}`}
              to={path}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="menu-actions">
        <button
          className="dashboard-theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <LightModeOutlined /> : <NightsStayOutlined />}
        </button>
        <div className="profile-wrap" ref={profileRef}>
          <button
            className="profile"
            type="button"
            onClick={() => setIsProfileDropdownOpen((open) => !open)}
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
          >
            <span className="avatar">{initials || "I"}</span>
            <span className="profile-name">{displayName}</span>
            <ExpandMore className="profile-chevron" />
          </button>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <strong>{displayName}</strong>
              <span>{user.email || "Your Trade2Day account"}</span>
              <Link to="/funds" onClick={() => setIsProfileDropdownOpen(false)}>
                Account funds
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

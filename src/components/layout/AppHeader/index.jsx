import { Link } from "react-router";
import ThemeToggleButton from "../../ThemeToggleButton";
import UserDropdown from "../../UserDropdown";
import "./AppHeader.css"; // Import file CSS riêng

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            <img className="logo-light" src="./images/logo/logoApp.png" alt="Logo" />
            <img className="logo-dark" src="./images/logo/logoApp.png" alt="Logo" />
          </Link>
        </div>
        <div className="header-right">
          <ThemeToggleButton />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

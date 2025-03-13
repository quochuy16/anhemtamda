import { Link } from "react-router";
import { useSidebar } from "../../SidebarContext";
import "./AppSidebar.css"; // Import CSS riêng

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();

  return (
    <aside
      className={`app-sidebar ${
        isExpanded || isMobileOpen ? "expanded" : isHovered ? "hovered" : "collapsed"
      } ${isMobileOpen ? "mobile-open" : "mobile-closed"}`}
    >
      <div className={`sidebar-logo ${!isExpanded && !isHovered ? "center" : ""}`}>
        <Link to="/">
          <img
            className="logo light"
            src="/images/logo/logoApp.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <img
            className="logo dark"
            src="/images/logo/logoApp.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <div className="menu-section">
            {/* Thêm các menu items tại đây */}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;

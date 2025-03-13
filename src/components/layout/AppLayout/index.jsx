import { SidebarProvider, useSidebar } from "../../SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "../AppHeader";
import Backdrop from "../Backdrop";
import AppSidebar from "../AppSidebar";
import "./AppLayout.css"; // Import file CSS

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="layout-container">
      <div>
        <Backdrop />
      </div>
      <div
        className={`layout-content ${
          isExpanded || isHovered ? "expanded" : "collapsed"
        } ${isMobileOpen ? "mobile-open" : ""}`}
      >
        <AppHeader />
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;

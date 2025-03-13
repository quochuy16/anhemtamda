import { useSidebar } from "../../SidebarContext";
import "./Backdrop.css"; // Import file CSS riêng

const Backdrop = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return <div className="backdrop" onClick={toggleMobileSidebar} />;
};

export default Backdrop;

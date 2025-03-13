import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ScrollToTop from "./pages/ScrollToTop";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css"; // Import file CSS riêng

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/adminPageAETamDa" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

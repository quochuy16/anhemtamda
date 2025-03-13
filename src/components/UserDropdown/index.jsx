import { useState } from "react";
import "./UserDropdown.css"; // Import CSS

export default function UserDropdown() {
  return (
    <div className="relative">
      <button className="user-dropdown-toggle">
        <span className="user-dropdown-text">Anh Em Tam Đa</span>
      </button>
    </div>
  );
}

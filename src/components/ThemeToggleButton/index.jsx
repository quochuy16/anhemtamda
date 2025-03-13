import { useTheme } from "../ThemeContext";
import "./ThemeToggleButton.css";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      <svg className="icon-dark" width="20" height="20" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99998 1.5415C10.4142..."
          fill="currentColor"
        />
      </svg>
      <svg className="icon-light" width="20" height="20" viewBox="0 0 20 20">
        <path d="M17.4547 11.97L18.1799..." fill="currentColor" />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;

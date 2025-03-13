import React from "react";
import "./Table.css"; // Import file CSS riêng

// Table Component
export const Table = ({ children, className = "" }) => {
  return <table className={`table ${className}`}>{children}</table>;
};

// TableHeader Component
export const TableHeader = ({ children, className = "" }) => {
  return <thead className={`table-header ${className}`}>{children}</thead>;
};

// TableBody Component
export const TableBody = ({ children, className = "" }) => {
  return <tbody className={`table-body ${className}`}>{children}</tbody>;
};

// TableRow Component
export const TableRow = ({ children, className = "" }) => {
  return <tr className={`table-row ${className}`}>{children}</tr>;
};

// TableCell Component
export const TableCell = ({ children, isHeader = false, className = "" }) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={`table-cell ${className}`}>{children}</CellTag>;
};

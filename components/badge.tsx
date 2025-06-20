import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "4px"
      }}
    >
      {children}
    </span>
  );
};

export default Badge;

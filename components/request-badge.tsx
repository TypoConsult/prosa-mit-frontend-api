"use client";

import React from "react";
import { useTheme } from "next-themes";

const RequestBadge = ({
  method,
  children
}: {
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
  children: React.ReactNode;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <span style={{ display: "flex", alignItems: "center", gap: "0px" }}>
        <span
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: "4px 0 0 4px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            border: "1px solid #000"
          }}
        >
          {method.toUpperCase()}
        </span>
        <span
          style={{
            border: "1px solid #E9E9E9",
            display: "flex",
            backgroundColor: "#F2F2F2",
            color: "#000",
            padding: "4px 8px",
            borderRadius: "0 4px 4px 0",
            width: "fit-content",
            height: "100%",
            fontFamily: "monospace"
          }}
        >
          {children}
        </span>
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0px" }}>
      <span
        style={{
          backgroundColor: isDark ? "#fff" : "#000",
          color: isDark ? "#000" : "#fff",
          padding: "4px 8px",
          borderRadius: "4px 0 0 4px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          border: isDark ? "1px solid #fff" : "1px solid #000"
        }}
      >
        {method.toUpperCase()}
      </span>
      <span
        style={{
          border: isDark ? "1px solid #404040" : "1px solid #E9E9E9",
          display: "flex",
          backgroundColor: isDark ? "#2a2a2a" : "#F2F2F2",
          color: isDark ? "#fff" : "#000",
          padding: "4px 8px",
          borderRadius: "0 4px 4px 0",
          width: "fit-content",
          height: "100%",
          fontFamily: "monospace"
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default RequestBadge;

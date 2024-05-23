import React from "react";

export default function Layout({ children }) {
  return (
    <div className="p-4 flex-1 pb-8 relative focus:outline-none container mx-auto ">
      {children}
    </div>
  );
}

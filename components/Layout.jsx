import React from "react";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 p-6">
    <main className="max-w-7xl mx-auto">{children}</main>
  </div>
);

export default Layout;

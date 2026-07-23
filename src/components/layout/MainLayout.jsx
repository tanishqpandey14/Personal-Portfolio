import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 overflow-x-hidden">
      <div className="w-full flex relative">
        {/* Sidebar Component */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Fixed Navbar Component */}
        <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />

        {/* Right Scrollable Main Content Area */}
        <div className="flex-1 lg:pl-80 w-full min-w-0 px-3 pt-16 sm:pt-24 lg:pt-28 pb-4 lg:p-8">
          <main className="space-y-12 sm:space-y-24 max-w-5xl mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
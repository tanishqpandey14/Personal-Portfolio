import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-text-primary overflow-x-clip">
      {/* Fixed colour glows: this is what the glass panels blur */}
      <div
        aria-hidden="true"
        className="ambient fixed inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <Navbar onOpenSidebar={() => setIsSidebarOpen(true)} />

        {/* Main scrolling column. Left padding clears the floating sidebar */}
        <div className="flex-1 w-full min-w-0 px-4 pt-20 sm:pt-28 pb-6 lg:pl-88 lg:pr-10">
          <main className="space-y-20 sm:space-y-28 max-w-5xl mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

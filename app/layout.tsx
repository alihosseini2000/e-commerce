'use client';

import "./globals.css";
import ClientProvider from "./ClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <ClientProvider>
        <DarkModeProvider>
          <body className="dark:bg-gray-950 dark:text-white relative">
            <Navbar onToggleSidebar={toggleSidebar} />
            {isSidebarOpen && <Sidebar />}
            <main className="flex-grow">{children}</main>
            <hr />
            <Footer />
          </body>
        </DarkModeProvider>
      </ClientProvider>
    </html>
  );
}

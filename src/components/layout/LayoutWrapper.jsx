'use client';

import { usePathname } from "next/navigation";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide Navbar/Footer for ALL admin routes
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <main className="flex-1">
        {!isAdminRoute && <div className="pt-8 lg:pt-12"></div>}
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
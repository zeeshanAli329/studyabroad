'use client';

import { usePathname } from "next/navigation";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <main className="flex-1 ">
        {!isAdminRoute && <div className="pt-0 lg:pt-4"></div>}
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminAuthWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!token || !user || !user.id) {
      router.push('/admin/login');
    }
  }, [router]);

  return <>{children}</>;
}

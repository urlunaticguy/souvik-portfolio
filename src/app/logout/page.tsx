'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearAuthCookie } from '@/lib/auth';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    clearAuthCookie();
    router.replace('/login');
  }, []);

  return <div className="p-4 text-white">Logging out...</div>;
}

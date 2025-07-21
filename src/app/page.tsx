// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function RootRedirector() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('auth_token');

    if (token) {
      router.replace('/dashboard');
    } else {
      router.replace('/portfolio');
    }
  }, []);

  return <div className="text-white p-4">Redirecting...</div>;
}

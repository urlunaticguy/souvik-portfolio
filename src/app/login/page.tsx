'use client';

import { useRouter } from 'next/navigation';
import { setAuthCookie } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    setAuthCookie('mock_token_123');
    router.push('/dashboard');
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

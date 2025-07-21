'use client';

import { Navigator } from '@/components/Navigator';

export default function DashboardPage() {
  return (
    <Navigator>
      <div className="p-4 text-white">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <p>You are logged in!</p>
        <a href="/logout" className="underline text-blue-400">
          Logout
        </a>
      </div>
    </Navigator>
  );
}

'use client';

import { useSession } from 'next-auth/react';

export default function MyPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>My Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

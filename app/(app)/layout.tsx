'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import React from 'react';

export default function LoginPageLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

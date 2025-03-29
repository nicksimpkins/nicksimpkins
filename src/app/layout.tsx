import './globals.css';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={null}>
        <body suppressHydrationWarning={true}>{children}</body>
      </Suspense>
    </html>
  );
}
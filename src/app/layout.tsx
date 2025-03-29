import './globals.css';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
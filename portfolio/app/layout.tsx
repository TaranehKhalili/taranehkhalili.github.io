import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppBar from './components/AppBar';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Taraneh Portfolio',
  description: 'My personal website and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <AppBar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}


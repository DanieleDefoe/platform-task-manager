import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Добро пожаловать',
  description: 'Онлайн платформа "Список задач"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container min-h-screen flex items-center justify-center bg-violet-300 max-w-none">
          {children}
        </main>
      </body>
    </html>
  );
}

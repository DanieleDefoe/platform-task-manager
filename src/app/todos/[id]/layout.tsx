import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Описание задачи',
  description: 'Страница с описанием задачи',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl w-full flex items-center justify-center">
      {children}
    </section>
  );
}

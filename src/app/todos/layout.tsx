import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Список задач',
  description: 'Страница со списком задач пользователя',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="max-w-3xl w-full">{children}</section>;
}

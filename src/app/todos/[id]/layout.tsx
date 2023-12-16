import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Описание задачи',
  description: 'Страница с описанием задачи',
};

// export async function generateStaticParams() {
//   const {
//     data: { todos },
//   } = await axios.get<GetTodosResponse>('/api/todos');

//   return todos.map(({ id }) => ({ id }));
// }

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

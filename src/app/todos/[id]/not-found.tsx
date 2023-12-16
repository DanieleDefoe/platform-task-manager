import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center text-black">
      <h2>Задача не найдена</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/todos"
        className="text-xl shandow-md bg-blue-500 text-white hover:bg-blue-400 transition-all px-3 py-1 rounded-md disabled:opacity-80 disabled:pointer-events-none"
      >
        Вернуться к списку задач
      </Link>
    </div>
  );
}

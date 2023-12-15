import axios from 'axios';
import Link from 'next/link';

axios.defaults.baseURL = 'http://localhost:3000';

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-black font-bold w-full max-w-lg text-center">
        Добро пожаловать в онлайн-платформу для управления задачами!
      </h1>
      <Link
        href="/todos"
        className="text-xl shandow-md bg-blue-500 text-white hover:bg-blue-400 transition-all px-3 py-1 rounded-md disabled:opacity-80 disabled:pointer-events-none"
      >
        Перейти в списку задач
      </Link>
    </section>
  );
}

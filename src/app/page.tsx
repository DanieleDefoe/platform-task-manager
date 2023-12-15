import axios from 'axios';
import Link from 'next/link';

axios.defaults.baseURL = 'http://localhost:3000';

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-black font-bold w-full max-w-lg text-center">
        Добро пожаловать в онлайн-платформу для управления задачами!
      </h1>
      <Link href="/todos">Перейти в списку задач</Link>
    </section>
  );
}

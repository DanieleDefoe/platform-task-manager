import axios from 'axios';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = Todo & { setTodos: Dispatch<SetStateAction<Todo[]>> };

function TodoItem({ id, desc, completed, setTodos }: Props) {
  async function deleteTodo(id: string) {
    await axios.delete(`/api/todos/${id}`);

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <article className="bg-violet-500 flex justify-between items-center p-3 rounded-md shadow-lg w-full">
      <section className="flex gap-3">
        <h3 className={`text-lg text-white ${completed ? 'line-through' : ''}`}>
          {desc}
        </h3>
      </section>
      <section className="flex gap-3">
        <Link
          href={`/todos/${id}`}
          className="text-md rounded-md shandow-md bg-green-500 text-white hover:bg-green-400 transition-all px-2 py-1"
        >
          Редактировать
        </Link>
        <button
          className="text-md rounded-md shandow-md bg-red-500 text-white hover:bg-red-400 transition-all px-2 py-1"
          onClick={() => deleteTodo(id)}
        >
          Удалить
        </button>
      </section>
    </article>
  );
}

export { TodoItem };

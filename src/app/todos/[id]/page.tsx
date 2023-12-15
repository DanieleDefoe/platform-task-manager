'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Checkbox } from 'primereact/checkbox';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';

interface Props {
  params: { id: string };
}

export default function EditTodoPage({ params: { id } }: Props) {
  const [todo, setTodo] = useState<Todo>({ id, desc: '', completed: false });
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const {
        data: { todo: newTodo },
      } = await axios.get<GetOneTodoResponse>(`/api/todos/${id}`);

      if (newTodo) {
        setTodo(newTodo);
      }

      setLoading(false);
    })();
  }, [id]);

  async function updateTodo() {
    setEditing(true);
    await axios.put(`/api/todos/${id}`, todo);
    setEditing(false);
    return router.push('/todos');
  }

  return loading ? (
    <ProgressSpinner />
  ) : (
    <div className="max-w-3xl w-full">
      <Link
        href="/todos"
        className="text-md rounded-md shandow-md bg-blue-500 text-white hover:bg-blue-400 transition-all px-3 py-1"
      >
        Список задач
      </Link>
      <section className="flex flex-col items-center gap-8 pt-8 bg-violet-300 pb-32 w-full">
        <h3 className="text-2xl text-black font-bold">Редактировать задачу</h3>
        <section
          className="w-full grid gap-4 grid-cols min-h-[36px] place-items-center"
          style={{ gridTemplateColumns: 'max-content 1fr' }}
        >
          <h4 className="text-xl text-black w-max">Описание</h4>
          <input
            type="text"
            className="text-xl rounded-md shadow-md px-1 text-black w-full "
            placeholder="Введите новое описание"
            value={todo.desc}
            onChange={(event) =>
              setTodo((prevTodo) => ({
                ...prevTodo,
                desc: event.target.value,
              }))
            }
          />
        </section>
        <section className="flex gap-4 items-center">
          <h4 className="text-xl text-black">Статус</h4>
          <Checkbox
            checked={todo.completed}
            onChange={() =>
              setTodo((prevTodo) => ({
                ...prevTodo,
                completed: !prevTodo.completed,
              }))
            }
            className="w-7 h-7 rounded-md border items-center justify-center border-cyan-900 text-black"
          />
        </section>
        <Button
          label="Подтвердить"
          className="text-md rounded-md shandow-md bg-blue-500 text-white hover:bg-blue-400 transition-all px-3 py-1"
          icon="pi pi-check"
          onClick={updateTodo}
          loading={editing}
          disabled={editing}
        />
      </section>
    </div>
  );
}
